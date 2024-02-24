import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import {
  FormControl,
  Input as MuiInput,
  inputClasses,
  InputLabel,
  inputLabelClasses,
  styled,
} from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import type { Control, FieldValues, Path, UseControllerProps } from 'react-hook-form';
import { Controller } from 'react-hook-form';

const LineFormControl = styled(FormControl)`
  width: 100%;

  & + & {
    margin-top: 20px;
  }

  label + .${inputClasses.root} {
    margin-top: 20px;
  }

  .${inputClasses.root} {
    &.Mui-disabled:before {
      border-bottom-style: none;
    }
  }

  .${inputLabelClasses.root} {
    font-size: 15px;
    line-height: 18px;
    color: #383743;
    transform: translate(0, -1.5px) scale(1);
  }
`;

const RequiredMark: React.FC = () => <span style={{ color: '#ff7473' }}>*</span>;

interface InputProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  type?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  control: Control<TFieldValues>;
  rules?: UseControllerProps['rules'];
}

export const Input = <TFieldValues extends FieldValues = FieldValues>({
  name,
  type = 'text',
  label,
  placeholder,
  required,
  disabled,
  control,
  rules,
}: InputProps<TFieldValues>): JSX.Element => (
  <Controller
    name={name}
    control={control}
    rules={{ required, ...rules }}
    render={({ field }) => (
      <LineFormControl variant="standard">
        <InputLabel>
          {label} {required ? <RequiredMark /> : null}
        </InputLabel>
        <MuiInput
          type={type}
          placeholder={placeholder}
          startAdornment={' '}
          required={required}
          disabled={disabled}
          {...field}
        />
      </LineFormControl>
    )}
  />
);

export const PasswordInput = <TFieldValues extends FieldValues = FieldValues>({
  name,
  control,
  rules,
  label,
  placeholder,
  required,
}: InputProps<TFieldValues>): JSX.Element => {
  const [visible, setvisible] = useState(false);
  const handleClick = useCallback(() => setvisible(flag => !flag), []);

  useEffect(() => {
    return () => setvisible(false);
  }, []);

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required, ...rules }}
      render={({ field }) => (
        <LineFormControl variant="standard">
          <InputLabel>
            {label} {required ? <RequiredMark /> : null}
          </InputLabel>
          <MuiInput
            type={visible ? 'text' : 'password'}
            placeholder={placeholder}
            startAdornment={' '}
            endAdornment={
              visible ? (
                <VisibilityOffOutlinedIcon sx={{ fontSize: 16 }} onClick={handleClick} />
              ) : (
                <VisibilityOutlinedIcon sx={{ fontSize: 16 }} onClick={handleClick} />
              )
            }
            required={required}
            {...field}
          />
        </LineFormControl>
      )}
    />
  );
};

export const ErrorMessage = styled('div')`
  margin: 8px 0 20px;
  font-size: 14px;
  line-height: 18px;
  color: #ff7473;
`;
