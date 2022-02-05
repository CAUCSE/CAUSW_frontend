import * as React from 'react';
import styled, { css } from 'styled-components';

type ColorSet = 'blue' | 'green' | 'black' | 'approach' | 'white';

interface InputProps extends Omit<React.HTMLProps<HTMLInputElement>, 'size'> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  round?: boolean;
  value?: string | number;
  color?: ColorSet;
}

const Input: React.FC<InputProps> = ({ type, round = true, color = 'black', ...rest }) => {
  const htmlProps = rest as unknown;
  return <InputBlock type={type} color={color} round={round} {...htmlProps} />;
};

export default Input;

interface InputBlockProps {
  round: boolean;
  color: ColorSet;
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
  border: 1px solid ${({ theme, color }) => theme.color[color].main};
  color: ${props => props.color};

  margin-bottom: 10px;
  padding-left: 30px;

  font-size: 12px;

  &::placeholder {
    color: '#A8A4A4';
  }
`;
