import { useEffect, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { FileInput, InputIcon } from './styled';

export const ImageInput: React.FC<{ name: string }> = ({ name }) => {
  const { register, watch } = useFormContext();
  const { ref, ...rest } = register(name);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [blobUrl, setBlobUrl] = useState('');

  const handleClick = () => inputRef.current?.click();

  useEffect(() => {
    const subscription = watch((value, body) => {
      if (body.name === name) {
        setBlobUrl(blobUrl => {
          if (blobUrl) URL.revokeObjectURL(blobUrl);

          if ('string' === typeof value[name]) return value[name];
          else if (value[name].length) {
            const file = value[name][0];
            return URL.createObjectURL(file);
          }

          return '';
        });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <FileInput onClick={handleClick} blobUrl={blobUrl}>
      <InputIcon />
      <input
        ref={e => {
          ref(e);
          inputRef.current = e;
        }}
        type="file"
        accept="image/*"
        hidden
        {...rest}
      />
    </FileInput>
  );
};
