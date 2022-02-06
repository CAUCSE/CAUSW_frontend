import styled from 'styled-components';

export const DefaultLogo: React.FC = () => <Logo />;

const Logo = styled.img.attrs({ src: '/images/logo.png', alt: 'Logo Image' })`
  width: 50px;
  height: 50px;
`;
