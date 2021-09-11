import * as React from 'react';
import styled, { css } from 'styled-components';
import { Color, palette } from '../../../styles/palette';

type InputType = 'text' | 'password' | 'email' | 'time' | 'date' | 'datetime-local';
type InputSize = 'small' | 'medium' | 'large';

interface InputProps extends Omit<React.HTMLProps<HTMLInputElement>, 'size'> {
  type: InputType;
  // value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  round?: boolean;
  size?: InputSize;
  value?: string | number;
  color?: Color;
}

const Input: React.FC<InputProps> = ({ type, round = true, size = 'large', color = 'black', ...rest }) => {
  const htmlProps = rest as any;
  return <InputBlock type={type} color={color} round={round} cutomSize={size} {...htmlProps} />;
};

export default Input;

interface InputBlockProps {
  round: boolean;
  customSize: InputSize;
  color: Color;
}

const InputBlock = styled.input<InputBlockProps>`
  align-items: center;
  ${props =>
    props.round &&
    css`
      border-radius: 25px;
    `}
  width: ${props => props.width}px;
  height: ${props => props.height}px;

  background-color: transparent;
  border: 1px solid ${palette.black.main};
  color: ${props => props.color};

  margin-bottom: 10px;
  padding-left: 30px;

  font-size: 12px;

  &::placeholder {
    color: '#A8A4A4';
    /* color: ${palette.black.sub}; */
  }
`;
