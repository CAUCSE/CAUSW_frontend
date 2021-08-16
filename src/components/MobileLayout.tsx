import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PAGE_URL } from '../configs/path';

export const MobileLayout = (PageCompoenet: React.FC): React.FC =>
  React.memo(() => (
    <>
      <main>
        <PageCompoenet />
      </main>
      <Nav>
        <NavLink to={PAGE_URL.Main}>메인 페이지</NavLink>
        <NavLink to={PAGE_URL.Main}>소모임 페이지</NavLink>
        <NavLink to={PAGE_URL.Main}>게시판 페이지</NavLink>
      </Nav>
    </>
  ));

const Nav = styled.nav``;

const NavLink = styled(Link)`
  text-indent: -9999px;
`;
