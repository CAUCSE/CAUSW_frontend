import styled from '@emotion/styled';

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

export const UniformLogo: React.FC = () => (
  <img style={{ width: '50px', height: '43px' }} src="/images/uniform.png" alt="Logo Image" />
);

export const DefaultLogo: React.FC = () => (
  <Logo style={{ width: '50px', height: '50px' }} src="/images/logo.png" alt="Logo Image" />
);
