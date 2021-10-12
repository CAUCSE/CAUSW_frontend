import { ClearButton } from '@/components/atoms/clear';
import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
`;

export const TitleInput = styled.input`
  width: 100%;
  padding: 0%;
  border: 0;
  outline: none;
  font-size: 18px;
  font-weight: bold;
  line-height: 21px;
  color: #3f4040;

  &::placeholder {
    color: inherit;
  }
`;

export const SubmitButton = styled(ClearButton).attrs({ type: 'submit' })`
  position: absolute;
  top: 0;
  right: 0;
  width: 42px;
  height: 23px;
  font-size: 14px;
  line-height: 16px;
  color: #fff;
  background: #312ed7;
  border-radius: 30px;
`;
