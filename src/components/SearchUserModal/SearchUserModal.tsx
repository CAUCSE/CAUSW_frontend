import { Modal } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';

import { WithSearchUserModalUi } from './SearchUserModalUi';
import { Button, ModalBox, Text } from './styled';

import { usePageUiStore } from '@/hooks';

export const SearchUserModal: React.FC = observer(() => {
  const {
    setTarget,
    searchUserModal: { visible, close, users },
  } = usePageUiStore<WithSearchUserModalUi>();

  const handleClick = useCallback(
    (user?: Model.User) => () => {
      if (user) setTarget(user);
      close();
    },
    [],
  );

  return (
    <Modal open={visible} onClose={close} closeAfterTransition>
      <ModalBox>
        {users.map(user => (
          <Button key={user.studentId} onClick={handleClick(user)}>
            <Text className="text-ellipsis">
              {user.nameWithAdmission}: {user.email}
            </Text>
          </Button>
        ))}
      </ModalBox>
    </Modal>
  );
});
