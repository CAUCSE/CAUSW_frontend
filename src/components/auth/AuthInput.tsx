import Input from '../../components/common/Input/Input';
import * as React from 'react';

interface AuthInputProps {
  type: 'email' | 'password' | 'text';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
  placeholder: string;
}
const AuthInput: React.FC<AuthInputProps> = ({ type, value, onChange, onReset, placeholder }) => {
  return (
    <Input
      type={type}
      round
      color="black"
      width="207"
      height="34"
      value={value}
      onChange={onChange}
      onReset={onReset}
      placeholder={placeholder}
    ></Input>
  );
};

export default AuthInput;
