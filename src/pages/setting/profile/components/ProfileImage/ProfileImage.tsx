import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef, useState } from 'react';

import { Button, TempImage, BasicProfileButton } from './styled';

import { usePageUiStore } from '@/hooks';
import { useRootStore } from '@/stores/RootStore';

export const ProfileImage: React.FC = observer(() => {
  const {
    auth: { me },
  } = useRootStore();
  const { blobUrl, setFile } = usePageUiStore<PageUiStore.SettingProfile>();
  const ref = useRef<HTMLInputElement | null>(null);
  const [basicProfile, setBaisicProfile] = useState<boolean>(false);
  const handleClick = () => {
    setBaisicProfile(false);
    ref.current?.click();
  };

  useEffect(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.addEventListener('change', () => setFile((input.files ?? [])[0]));
    ref.current = input;
  }, []);

  return (
    <>
      <Button type="button" onClick={handleClick}>
        <TempImage
          src={basicProfile ? '/images/default_profile.png' : blobUrl ?? me?.profileImage ?? ''}
        />
      </Button>
      <BasicProfileButton
        onClick={() => {
          setBaisicProfile(true);
          setFile(null);
        }}
      >
        기본 이미지 변경
      </BasicProfileButton>
    </>
  );
});
