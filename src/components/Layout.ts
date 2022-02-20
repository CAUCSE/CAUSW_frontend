import styled from '@emotion/styled';

export const PageRoot = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const PageBody = styled.main`
  position: relative;
  flex: 1 0 0;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const BodyScreen = styled.div`
  padding: 0 20px;
`;

export const PageFooter = styled.footer`
  height: auto;
  padding: 0 20px;
`;
