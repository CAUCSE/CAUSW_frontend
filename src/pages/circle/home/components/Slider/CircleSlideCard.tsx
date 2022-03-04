import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { memo, useState } from 'react';
import { generatePath, useHistory } from 'react-router';

import { Icons } from '@/assets';
import { ClearButton } from '@/components';
import { PAGE_URL } from '@/configs/path';

export const CircleSlideCard: React.FC<{ model: Model.Circle }> = memo(
  ({ model: { id: circleId, mainImage, name, newLineDescription } }) => {
    const { push } = useHistory();
    const [isFlipped, setFlip] = useState(false);
    const handleClick = () => {
      if (isFlipped) setFlip(c => !c);
      else push(generatePath(PAGE_URL.CircleJoin, { circleId }));
    };
    const handleFlip = (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      setFlip(c => !c);
    };

    return (
      <Card onClick={handleClick}>
        <Inner isFlipped={isFlipped}>
          <Body>
            <Cover mainImage={mainImage} />
            <Content>
              <ContentName>{name}</ContentName>
              <p dangerouslySetInnerHTML={{ __html: newLineDescription }} />
            </Content>
          </Body>
          <Footer>
            <Name className="text-ellipsis-line">{name}</Name>
            <ClearButton onClick={handleFlip}>
              <Icon active={isFlipped} />
            </ClearButton>
          </Footer>
        </Inner>
      </Card>
    );
  },
);

const Card = styled.article`
  box-sizing: border-box;
  width: 90%;
  max-width: 360px;
  background: #fff;
  border: 1px solid #dadada;
  box-shadow: 1px 2px 5px rgb(0 0 0 / 15%);
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

  ${({ mainImage }) =>
    mainImage
      ? css`
          background: center / contain no-repeat url(${mainImage});
        `
      : css`
          background: center / contain no-repeat url('/images/empty.png');
          background-size: 65%;
        `}
  background-color: #efefef;
`;

const Name = styled.h3`
  margin: 0 35px 0 13px;
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
  overflow: hidden;
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

const Icon = styled(Icons.Article)`
  position: absolute;
  top: 9px;
  right: 5px;
`;
