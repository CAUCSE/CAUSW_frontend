import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ClearTextarea = styled.textarea`
  padding: 0;
  border: 0;
  outline: none;
  background: inherit;
  resize: none;
`;

export const ClearLink = styled(Link)`
  user-select: none;
  text-decoration: none;
  color: #3f4040;

  &:focus,
  &:active {
    -webkit-tap-highlight-color: transparent;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    outline: none;
  }
`;

export const ClearA = styled.a`
  user-select: none;
  text-decoration: none;
  color: #3f4040;
`;

export const ClearUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
