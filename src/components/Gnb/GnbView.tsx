import styled from '@emotion/styled';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  padding: 0 0 calc(constant(safe-area-inset-bottom));
  padding: 0 0 calc(env(safe-area-inset-bottom));
  width: 100%;
  height: 57px;
  background: #f8f8f8;
  box-sizing: content-box;
`;

export const NavLink: React.FC<{ to: string; a11y: string }> = ({ to, a11y, children }) => (
  <LinkStyle to={to} activeClassName="active">
    {children}
    <span className="a11y-hidden">{a11y}</span>
  </LinkStyle>
);

const LinkStyle = styled(Link)`
  position: relative;
  flex: 1 1 0;

  &.active svg path {
    fill: #312ed7;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
