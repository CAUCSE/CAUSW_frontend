import { CircularProgress, styled } from '@mui/material';

const CustomButtonRoot = styled('button')`
  width: 100%;
  height: 45px;
  border-radius: 10px;
  background-color: #312ed7;
  font-size: 18px;
  line-height: 21px;
  color: ${(props: ButtonProps) => props.color || 'white'};
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
  }

  &:focus-visible {
    box-shadow:
      0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: #dadada;
  }
`;

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  $loading?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  color?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <CustomButtonRoot {...props}>
    {props.$loading ? <CircularProgress size="1.2rem" color="inherit" /> : children}
  </CustomButtonRoot>
);

export const NavButton = styled(Button)`
  margin: 13px 0;
`;

const ClearButtonNative = styled('button')`
  user-select: none;
  padding: 0;
  border: none;
  background-color: transparent;
  background-repeat: no-repeat;
  color: #3f4040;
  cursor: pointer;
  outline: none;

  &:focus,
  &:active {
    -webkit-tap-highlight-color: transparent;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    outline: none;
  }
`;

export const ClearButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <ClearButtonNative {...props}>
    {props.disabled ? <CircularProgress size="1.2rem" color="inherit" /> : children}
  </ClearButtonNative>
);
