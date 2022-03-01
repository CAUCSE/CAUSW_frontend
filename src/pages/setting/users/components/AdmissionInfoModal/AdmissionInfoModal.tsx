import Icon from '@mui/icons-material/Close';
import { Modal } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { AttachImage, CloseButton, Info, Inner, ModalBox } from './styled';

import { usePageUiStore } from '@/hooks';

export const AdmissionInfoModal: React.FC = observer(() => {
  const {
    admissionInfoModal: { visible, close, target },
  } = usePageUiStore<PageUiStore.SettingUsers>();

  return (
    <Modal open={visible} onClose={close} closeAfterTransition>
      <ModalBox>
        <CloseButton onClick={close}>
          <Icon />
        </CloseButton>
        <Inner>
          {target?.attachImage ? (
            <AttachImage src={target.attachImage} alt="admission image" />
          ) : null}
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
            <p
              style={{ marginBottom: 0 }}
              dangerouslySetInnerHTML={{ __html: target?.description ?? '' }}
            />
          </Info>
        </Inner>
      </ModalBox>
    </Modal>
  );
});
