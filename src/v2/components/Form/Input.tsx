import {
  css,
  inputLabelClasses,
  Input as MuiInput,
  InputLabel,
  FormControl,
  styled,
  inputClasses,
} from '@mui/material';
import { useEffect, useState } from 'react';

interface Props {
  id: string;
  name: string;
  label: string;
  type?: string;
  defaultValue?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export const Input: React.FC<Props> = ({ defaultValue, className, style, id, label, type = 'text', ...props }) => {
  const [value, setValue] = useState(defaultValue);
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => setValue(evt.target.value);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <Row className={className} style={{ width: '100%', ...style }} variant="standard">
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <MuiInput id={id} type={type} value={value} onChange={handleChange} startAdornment={' '} {...props} />
    </Row>
  );
};

const Row = styled(FormControl)`
  & + & {
    margin-top: 20px;
  }

  .${inputClasses.root}.Mui-disabled:before {
    border-bottom-style: none;
  }
`;

export const LabelCSS = css`
  .${inputLabelClasses.root} {
    font-size: 15px;
    line-height: 18px;
    color: #383743;
    transform: translate(0, -1.5px) scale(1);
  }
`;
