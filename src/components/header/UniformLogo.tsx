import styled from 'styled-components';

export const UniformLogo: React.FC = () => <Logo />;

const Logo = styled.img.attrs({ src: '/images/uniform.png', alt: 'Logo Image' })`
  width: 50px;
  height: 43px;
`;
