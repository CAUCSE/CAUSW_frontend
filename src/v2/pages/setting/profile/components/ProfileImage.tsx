import styled from '@emotion/styled';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import React, { useEffect, useRef, useState } from 'react';

import { ClearButton, ProfileImageBox } from '@/v2/components';

interface State {
  file: File | null;
  blobUrl?: string;
}

interface Props {
  defaultSrc?: string;
}
export const ProfileImage: React.FC<Props> = ({ defaultSrc }) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [values, setValues] = useState<State>({
    file: null,
    blobUrl: undefined,
  });
  const handleClick = () => ref.current?.click();

  useEffect(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.addEventListener('change', () => {
      console.debug(1);
      setValues(values => {
        const file = (input.files ?? [])[0];
        const blobUrl = URL.createObjectURL(file);

        if (values.blobUrl) URL.revokeObjectURL(values.blobUrl);

        return { file, blobUrl };
      });
    });

    ref.current = input;
  }, []);

  return (
    <Button type="button" onClick={handleClick}>
      <Image src={values.blobUrl ?? defaultSrc} />
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
