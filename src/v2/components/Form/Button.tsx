import { ButtonUnstyled, buttonUnstyledClasses, ButtonUnstyledProps } from '@mui/base';
import { styled } from '@mui/material';

const CustomButtonRoot = styled('button')`
  width: 100%;
  height: 45px;
  border-radius: 30px;
  background-color: #312ed7;
  font-size: 18px;
  line-height: 21px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    opacity: 0.9;
  }

  &.${buttonUnstyledClasses.active} {
    opacity: 0.8;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: #dadada;
  }
`;

interface Props extends ButtonUnstyledProps {
  className?: string;
  disabled?: boolean;
}
export const Button: React.FC<Props> = ({ children, ...props }) => (
  <ButtonUnstyled component={CustomButtonRoot} {...props}>
    {children}
  </ButtonUnstyled>
);

export const NavButtonWrapper = styled('div')`
  padding: 14px 33px;
`;
