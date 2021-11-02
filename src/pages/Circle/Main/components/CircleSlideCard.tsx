import { memo, useState } from 'react';
import styled from 'styled-components';

export const CircleSlideCard: React.FC = memo(() => {
  const [isFliped, setFliped] = useState(false);

  return (
    <Card>
      <Inner>
        <Body>
          <Cover></Cover>
          <Content></Content>
        </Body>
        <Footer>
          <Name className="text-ellipsis">CAUCSE 테니스부</Name>
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

const Cover = styled.div`
  top: 6px;
  left: 6px;
  width: calc(100% - 12px);
  height: calc(100% - 6px);
  border-radius: 5px;
  background-color: #03446a;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  border-radius: 5px;
  transform: rotateY(180deg);
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
`;

const Name = styled.h2`
  box-sizing: border-box;
  margin: 0;
  padding: 0 35px 0 13px;
  line-height: 36px;
  font-size: 12px;
  font-weight: bold;
  backface-visibility: hidden;
`;

const Inner = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 140%; // 5:7 비율

  &:hover {
    ${Body}, ${Name} {
      transform: rotateY(180deg);
    }
  }
`;
