import styled from '@emotion/styled';

export const DefaultLogo: React.FC = () => <Logo src="/images/logo.png" alt="Logo Image" />;

export const UniformLogo: React.FC = () => (
  <img
    style={{ width: '50px', height: '43px' }}
    src="/images/mascot-uniform.png"
    alt="mascot uniform image"
  />
);

export const StudyLogo: React.FC = () => (
  <Logo src="/images/mascot-study.png" alt="mascot study image" />
);

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;
