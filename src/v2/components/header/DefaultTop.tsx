import { memo } from 'react';
import styled from 'styled-components';

export const DefaultTop = memo(() => <Wrapper>중앙대학교 소프트웨어학부</Wrapper>);

const Wrapper = styled.div`
  font-size: 10px;
  line-height: 12px;
`;
