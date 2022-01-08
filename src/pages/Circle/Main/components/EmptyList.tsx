import { memo } from 'react';
import styled from 'styled-components';

export const EmptyList: React.FC<{ text: string }> = memo(({ text }) => (
  <Wrapper>
    <EmptyImage />
    <Messsage>{text}</Messsage>
  </Wrapper>
));

const Wrapper = styled.article`
  margin: 60px 0;
  text-align: center;
`;

const EmptyImage = styled.img.attrs({ src: '/images/empty.png' })`
  width: 130px;
  height: 166px;
`;

const Messsage = styled.div`
  margin-top: 14px;
  font-size: 13px;
  line-height: 15px;
  color: #a3a1a1;
`;
