import Icon from '@mui/icons-material/Close';
import { Modal } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { CloseButton, Info, ModalBox, ProfileImage } from './styled';
import { UserInfoModalUi } from './UserInfoModalUi';

import { usePageUiStore } from '@/hooks';

export const UserInfoModal: React.FC = observer(() => {
  const {
    userInfoModal: { visible, close, target },
  } = usePageUiStore<{ userInfoModal: UserInfoModalUi }>();

  return (
    <Modal open={visible} onClose={close} closeAfterTransition>
      <ModalBox>
        <CloseButton onClick={close}>
          <Icon />
        </CloseButton>
        <ProfileImage src={target?.profileImageSrc} alt="profile image" />
        <Info>
          {target?.email ? (
            <>
              <strong>{target?.email}</strong>
              <br />
            </>
          ) : null}
          {target?.nameWithAdmission ? (
            <>
              {target?.nameWithAdmission}
              <br />
            </>
          ) : null}
          {target?.roleTxt}
        </Info>
      </ModalBox>
    </Modal>
  );
});
