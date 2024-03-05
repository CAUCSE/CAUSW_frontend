import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react';

import { Button, TempImage } from './styled';

import { usePageUiStore } from '@/hooks';
import { useRootStore } from '@/stores/RootStore';

export const ProfileImage: React.FC = observer(() => {
  const {
    auth: { me },
  } = useRootStore();
  const { blobUrl, setFile } = usePageUiStore<PageUiStore.SettingProfile>();
  const ref = useRef<HTMLInputElement | null>(null);
  const handleClick = () => ref.current?.click();

  useEffect(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.addEventListener('change', () => setFile((input.files ?? [])[0]));
    ref.current = input;
  }, []);

  return (
    <Button type="button" onClick={handleClick}>
      <TempImage src={blobUrl ?? me?.profileImage ?? ''} />
    </Button>
  );
});
