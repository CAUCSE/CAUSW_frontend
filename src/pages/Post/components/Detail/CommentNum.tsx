import { memo } from 'react';
import styled from 'styled-components';
import { ReactComponent as Icon } from '@/assets/icons/message.svg';

export const CommentNum: React.FC<{ num: number }> = memo(({ num }) => (
  <Wrapper>
    <Icon /> {num}
  </Wrapper>
));

export const Wrapper = styled.div`
  margin-top: 2px;
  text-align: right;
  font-size: 10px;
  line-height: 12px;
  color: #518cff;
`;
