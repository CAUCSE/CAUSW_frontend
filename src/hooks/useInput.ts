import React, { useCallback, useState } from 'react';

const useInput = (initialValue: string): [typeof input, typeof onChangeInput, typeof onResetInput] => {
  const [input, setInput] = useState(initialValue);

  const onChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    setInput(e.target.value);
  }, []);
  const onResetInput = useCallback(() => {
    setInput('');
  }, []);

  return [input, onChangeInput, onResetInput];
};

export default useInput;
