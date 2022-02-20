import styled from '@emotion/styled';

const Logo = styled.img`
  width: 50px;
  height: 43px;
`;

export const UniformLogo: React.FC = () => <Logo src="/images/uniform.png" alt="Logo Image" />;

export const DefaultLogo: React.FC = () => <Logo src="/images/logo.png" alt="Logo Image" />;
