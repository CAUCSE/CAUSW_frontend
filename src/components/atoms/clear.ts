import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ClearButton = styled.button`
  padding: 0;
  border: none;
  background-color: Transparent;
  background-repeat: no-repeat;
  cursor: pointer;
  outline: none;
`;

export const ClearLink = styled(Link)`
  text-decoration: none;
  color: #3f4040;
`;

export const ClearA = styled.a.attrs({ target: 'blank' })`
  text-decoration: none;
`;

export const ClearUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
