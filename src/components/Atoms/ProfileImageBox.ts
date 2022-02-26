import styled from '@emotion/styled';

export const ProfileImageBox = styled.div<{ src?: string }>`
  background-image: url(${({ src }) => src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
