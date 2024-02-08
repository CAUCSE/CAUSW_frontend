import { useState } from 'react';

interface useFormProps {
  initialValue: {
    searchPostInput: string;
  };
}

const useInputs = ({ initialValue }: useFormProps) => {
  const [values, setValues] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return { values, handleChange };
};

export default useInputs;
