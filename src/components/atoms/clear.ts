import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ClearButton = styled.button`
  padding: 0;
  border: none;
  background-color: Transparent;
  background-repeat: no-repeat;
  cursor: pointer;
  overflow: hidden;
  outline: none;
`;

export const ClearLink = styled(Link)`
  text-decoration: none;
  color: #3f4040;
`;
