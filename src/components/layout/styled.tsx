import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 57px;
  background: #f8f8f8;
`;

const LinkStyle = styled(Link)`
  position: relative;
  flex-grow: 1;
  width: 33.33%;

  &.active svg path {
    fill: ${({ theme }) => theme.color.blue.main};
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const NavLink: React.FC<{ to: string; a11y: string }> = ({ to, a11y, children }) => (
  <LinkStyle to={to} activeClassName="active">
    {children}
    <h2 className="a11y-hidden">{a11y}</h2>
  </LinkStyle>
);
