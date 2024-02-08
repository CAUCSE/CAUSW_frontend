import { useState } from 'react';

interface useInputsProps {
  initialValue: {
    searchPostInput: string;
  };
}

const useInputs = ({ initialValue }: useInputsProps) => {
  const [values, setValues] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return { values, handleChange };
};

export default useInputs;
