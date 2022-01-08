import { memo, useState } from 'react';
import styled from 'styled-components';
import { Icon as I } from '@/assets';
import { ClearButton } from '@/components/atoms/clear';

export const CircleSlideCard: React.FC<Model.Circle> = memo(({ mainImage, name, description }) => {
  const [isFlipped, setFlip] = useState(false);

  return (
    <Card>
      <Inner isFlipped={isFlipped}>
        <Body>
          <Cover mainImage={mainImage} />
          <Content>
            <ContentName>{name}</ContentName>
            {description}
          </Content>
        </Body>
        <Footer>
          <Name className="text-ellipsis">{name}</Name>
          <ClearButton onClick={() => setFlip(c => !c)}>
            <Icon active={isFlipped} />
          </ClearButton>
        </Footer>
      </Inner>
    </Card>
  );
});

const Card = styled.article`
  box-sizing: border-box;
  width: 80%;
  max-width: 360px;
  background: #fff;
  border: 1px solid #dadada;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  overflow: hidden;
  text-align: left;
`;

const Body = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100% - 40px);
  transition: transform 0.65s;
  transform-style: preserve-3d;

  > div {
    position: absolute;
    backface-visibility: hidden;
  }
`;

const Cover = styled.div<{ mainImage: string | null }>`
  top: 6px;
  left: 6px;
  width: calc(100% - 12px);
  height: calc(100% - 6px);
  border-radius: 5px;
  background: center / contain no-repeat url(${({ mainImage }) => mainImage ?? '/images/empty.png'});
  background-size: 65%;
  background-color: #efefef;
`;

const Name = styled.h3`
  box-sizing: border-box;
  margin: 0;
  padding: 0 35px 0 13px;
  line-height: 36px;
  font-size: 12px;
  font-weight: bold;
  backface-visibility: hidden;
`;

const Inner = styled.div<{ isFlipped: boolean }>`
  position: relative;
  width: 100%;
  padding-bottom: 140%; // 5:7 비율

  ${Body}, ${Name} {
    transform: ${({ isFlipped }) => (isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)')};
  }
`;

const Content = styled.div`
  padding: 13px 9px;
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  border-radius: 5px;
  transform: rotateY(180deg);
`;

const ContentName = styled.div`
  margin-bottom: 9px;
  line-height: 18px;
  font-size: 15px;
  font-weight: bold;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
`;

const Icon = styled(I.Article)`
  position: absolute;
  top: 9px;
  right: 5px;
`;
