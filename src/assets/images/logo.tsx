import Logo from './logo.png';
import styled from 'styled-components';

export const Image = styled.img`
  width: 91px;
  height: 96px;

  margin-bottom: 30px;
`;
Image.defaultProps = {
  src: Logo,
};
