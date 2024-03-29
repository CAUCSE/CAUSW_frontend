import { css } from '@emotion/react';
import styled from '@emotion/styled';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { memo, useState } from 'react';
import { generatePath, useHistory } from 'react-router';

// import { Icons } from '@/assets';
import { ClearButton } from '@/components';
import { PAGE_URL } from '@/configs/path';
import { usePageUiStore } from '@/hooks';

export const CircleMobileSlideCard: React.FC<{ model: Model.Circle }> = memo(
  ({ model: { id: circleId, mainImage, name, newLineDescription } }) => {
    const { push } = useHistory();
    const [isFlipped, setFlip] = useState(false);
    const { joinedCircles } = usePageUiStore<PageUiStore.CircleHome>();
    const handleClick = () => {
      if (isFlipped) setFlip(c => !c);
      else if (joinedCircles?.find(joinedCircle => joinedCircle.id === circleId))
        push(generatePath(PAGE_URL.CircleMain, { circleId }));
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
              <Icon />
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
  left: 10px;
  width: calc(100% - 20px);
  height: calc(100% - 6px);

  ${({ mainImage }) =>
    mainImage
      ? css`
          background: center / contain no-repeat url(${mainImage});
        `
      : css`
          background: center / contain no-repeat url('/images/empty.png');
          background-size: 65%;
        `}
  background-color: white;
  border-bottom: 1px solid #dadada;
`;

const Name = styled.h3`
  margin: 2px 35px 0 13px;
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

const Icon = styled(ChangeCircleIcon)`
  position: absolute;
  top: 7px;
  right: 12px;
`;
