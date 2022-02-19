import styled from '@emotion/styled';

export const PageRoot = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  // TODO: Header 에서 오염됨 헤더 정리 필요
  padding: 0 20px;
`;

export const PageBody = styled.main`
  flex: 1 0 0;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const BodyScreen = styled.div`
  /* padding: 0 20px; */
`;

export const PageFooter = styled.footer`
  height: auto;
  /* padding: 0 20px; */
`;
// ==
