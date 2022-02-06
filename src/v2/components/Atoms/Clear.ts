import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ClearButton = styled.button`
  user-select: none;
  padding: 0;
  border: none;
  background-color: Transparent;
  background-repeat: no-repeat;
  cursor: pointer;
  outline: none;
`;

export const ClearLink = styled(Link)`
  user-select: none;
  text-decoration: none;
`;

export const ClearUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
