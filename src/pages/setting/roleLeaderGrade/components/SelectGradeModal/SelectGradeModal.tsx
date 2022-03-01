import { Modal } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';

import { Button, ModalBox } from './styled';

import { usePageUiStore } from '@/hooks';

export const SelectGradeModal: React.FC = observer(() => {
  const {
    setRole,
    selectGradeModal: { visible, close },
  } = usePageUiStore<PageUiStore.SettingRoleLeaderGrade>();
  const handleClick = useCallback(
    (role: NonNullable<PageUiStore.SettingRoleLeaderGrade['role']>) => () => {
      setRole(role);
      close();
    },
    [],
  );

  return (
    <Modal open={visible} onClose={close} closeAfterTransition>
      <ModalBox>
        <Button onClick={handleClick('LEADER_1')}>1학년</Button>
        <Button onClick={handleClick('LEADER_2')}>2학년</Button>
        <Button onClick={handleClick('LEADER_3')}>3학년</Button>
        <Button onClick={handleClick('LEADER_4')}>4학년</Button>
      </ModalBox>
    </Modal>
  );
});
