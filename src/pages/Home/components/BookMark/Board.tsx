import { memo, useState } from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import { Post } from './Post';
import { ClearLink } from '@/components/atoms/clear';

export const Board = memo(() => {
  const [config] = useState({
    infiniteLoop: true,
    autoPlay: false,
    // XXX: swipe 이후 자동으로 움직이는 버그가 있음
    // https://github.com/leandrowd/react-responsive-carousel/issues/621
    interval: 24 * 60 * 60 * 1000,
    showThumbs: false,
    showArrows: false,
    showStatus: false,
    useKeyboardArrows: false,
  });

  return (
    <BoardBox>
      <h3>학생회 공지 게시판</h3>
      <BoardLink to={'#'}>더보기</BoardLink>
      <Carousel {...config}>
        <Post />
        <Post />
        <Post />
      </Carousel>
    </BoardBox>
  );
});

const BoardBox = styled.div`
  position: relative;
  padding: 12px 10px 30px;

  & + & {
    border-top: 2px solid #fff;
  }

  > h3 {
    margin: 0 0 8px;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
  }

  .carousel.carousel-slider {
    position: inherit;
  }

  .carousel .control-dots {
    left: 0;
    bottom: 12px;
    margin: 0;
    height: 6px;

    .dot {
      vertical-align: text-top;
      margin: 0 4px;
      width: 6px;
      height: 6px;
      background: #e4e4e4;
      box-shadow: none;
      transition: background-color 0.25s ease-in;
      opacity: 1;

      &.selected {
        background: #312ed7;
      }
    }
  }
`;

const BoardLink = styled(ClearLink)`
  position: absolute;
  top: 11px;
  right: 12px;
  padding: 3px;
  font-size: 9px;
  line-height: 11px;
  color: #312ed7;
  &:after {
    content: ' >';
  }
`;
