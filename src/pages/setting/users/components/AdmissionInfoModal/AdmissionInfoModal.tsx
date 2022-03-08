import { Modal } from '@mui/material';
import { observer } from 'mobx-react-lite';
import ImageViewer from 'react-simple-image-viewer';

import { AttachImage, Info, Inner, ModalBox } from './styled';

import { ClearButton } from '@/components';
import { usePageUiStore } from '@/hooks';

export const AdmissionInfoModal: React.FC = observer(() => {
  const {
    admissionInfoModal: {
      close,
      openImageViewer,
      closeImageViewer,
      visible,
      target,
      visibleImageViewer,
    },
  } = usePageUiStore<PageUiStore.SettingUsers>();

  return (
    <>
      <Modal open={visible} onClose={close} closeAfterTransition>
        <ModalBox>
          <Inner>
            {target?.attachImage ? (
              <ClearButton onClick={openImageViewer}>
                <AttachImage src={target.attachImage} alt="admission image" />
              </ClearButton>
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
      {visibleImageViewer && (
        <ImageViewer
          backgroundStyle={{ zIndex: 10001 }}
          src={[target?.attachImage ?? '']}
          currentIndex={0}
          disableScroll={false}
          closeOnClickOutside={false}
          onClose={closeImageViewer}
        />
      )}
    </>
  );
});
