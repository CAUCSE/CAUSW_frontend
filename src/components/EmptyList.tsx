import styled from '@emotion/styled';
import { memo } from 'react';

export const EmptyList: React.FC<{ text: string }> = memo(({ text }) => (
  <Wrapper>
    <EmptyImage src="/images/empty.png" alt="empty list image" />
    <Messsage>{text}</Messsage>
  </Wrapper>
));

const Wrapper = styled.article`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const EmptyImage = styled.img`
  width: 130px;
  height: 166px;
`;

const Messsage = styled.div`
  margin-top: 14px;
  font-size: 13px;
  line-height: 15px;
  color: #a3a1a1;
`;
