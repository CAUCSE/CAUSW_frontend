import styled from '@emotion/styled';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import React, { useEffect, useRef, useState } from 'react';

import { ClearButton, ProfileImageBox } from '@/v2/components';

interface Props {
  defaultSrc?: string | null;
  onChange?: (state: ImageState) => void;
}
export const ProfileImage: React.FC<Props> = ({ defaultSrc, onChange }) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [values, setValues] = useState<ImageState>({
    file: null,
    blobUrl: undefined,
  });
  const handleClick = () => ref.current?.click();

  useEffect(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.addEventListener('change', () =>
      setValues(values => {
        const file = (input.files ?? [])[0];

        if (file) {
          const blobUrl = URL.createObjectURL(file);

          if (values.blobUrl) URL.revokeObjectURL(values.blobUrl);
          if ('function' === typeof onChange) onChange({ file, blobUrl });

          return { file, blobUrl };
        } else {
          return values;
        }
      }),
    );

    ref.current = input;
  }, []);

  return (
    <Button type="button" onClick={handleClick}>
      <Image src={values.blobUrl ?? defaultSrc ?? ''} />
      <ProfileIcon />
    </Button>
  );
};

export const Button = styled(ClearButton)`
  position: relative;
  display: block;
  margin: 20px auto;
`;

export const ProfileIcon = styled(FaceRetouchingNaturalIcon)`
  position: absolute;
  right: -25px;
  bottom: 0;
`;

export const Image = styled(ProfileImageBox)`
  display: block;
  width: 155px;
  height: 123px;
  border-radius: 27px;
  overflow: hidden;
`;
