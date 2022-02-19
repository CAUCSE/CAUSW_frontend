import styled from 'styled-components';

interface CheckboxProps {
  className?: string;
  label: string;
}
export const Checkbox: React.FC<CheckboxProps> = ({ className = '', label, ...rest }) => {
  return (
    <Wrapper className={className}>
      <Input type="checkbox" {...rest} />
      <Label>{label}</Label>
    </Wrapper>
  );
};

const Input = styled.input`
  &:not(:checked),
  &:checked {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
`;

const Label = styled.span`
  position: relative;
  display: inline-block;
  padding-left: 20px;
  cursor: pointer;
  font-size: 12px;
  line-height: 14px;
  user-select: none;

  &:before,
  &:after {
    content: '';
    position: absolute;
    z-index: 0;
  }

  &:before {
    top: 1px;
    left: 0;
    width: 10px;
    height: 10px;
    border: 1px solid #383743;
    background-color: transparent;
    transition: 0.15s;
  }

  &:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 4px;
    width: 2px;
    height: 6px;
    border-top: 1px solid transparent;
    border-left: 1px solid transparent;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    transition: 0.3s;
  }
`;

const Wrapper = styled.label`
  ${Input}:checked + ${Label}:before {
    border: 1px solid #312ed7;
    background-color: #312ed7;
  }

  ${Input}:checked + ${Label}:after {
    transform: rotateZ(37deg);
  }
`;
