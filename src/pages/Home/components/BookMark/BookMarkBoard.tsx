import { memo } from 'react';
import styled from 'styled-components';
import { Board } from './Board';

export const BookMarkBoard: React.FC = memo(() => (
  <Wrapper>
    <h2>즐겨찾는 게시판</h2>
    <WrapperBoards>
      <Board />
      <Board />
      <Board />
    </WrapperBoards>
  </Wrapper>
));

const Wrapper = styled.section`
  margin: 20px 0;
  color: #3f4040;

  > h2 {
    margin: 0 0 10px;
    font-weight: bold;
    font-size: 13px;
    line-height: 15px;
  }
`;

const WrapperBoards = styled.div`
  background: #f8f8f8;
  border-radius: 10px;
`;
