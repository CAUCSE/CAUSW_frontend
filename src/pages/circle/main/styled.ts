import styled from '@emotion/styled';

export const CircleImage = styled.div<{ src: string }>`
  margin: 22px 0;
  padding-bottom: 56.25%;
  width: 100%;
  border-radius: 5px;
  background: center / contain no-repeat url(${({ src }) => src});
  background-color: #efefef;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 5%);
`;
