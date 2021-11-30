import styled from 'styled-components';
import { Portal } from '@/components/Portal';
import { Dimmed, ModalBox, ModalMenuButton } from '@/components/StyledModal';
import { action, makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '@/stores/RootStore';
import { useCallback, useLayoutEffect, useState } from 'react';
import { UI_COMMENT_MENU } from '@/configs/uiStoreKey';

export class CommentMenuUiStore {
  visiable = false;

  constructor() {
    makeObservable(this, {
      visiable: observable,
      setVisiable: action.bound,
    });
  }

  setVisiable(flag?: boolean): void {
    this.visiable = flag ?? !this.visiable;
  }
}

export const CommentContextMenu: React.FC = observer(() => {
  const {
    ui: { localUiStores },
  } = useRootStore();
  const [store] = useState(new CommentMenuUiStore());
  const close = useCallback(() => store.setVisiable(false), [store]);

  useLayoutEffect(() => {
    localUiStores.set(UI_COMMENT_MENU, store);

    return () => {
      localUiStores.delete(UI_COMMENT_MENU);
    };
  }, []);

  return store.visiable ? (
    <Portal>
      <>
        <Box>
          <ModalMenuButton>답글 달기</ModalMenuButton>
          <ModalMenuButton>댓글 수정</ModalMenuButton>
          <ModalMenuButton>댓글 삭제</ModalMenuButton>
        </Box>
        <Dimmed onClick={close} />
      </>
    </Portal>
  ) : null;
});

const Box = styled(ModalBox)`
  box-sizing: border-box;
  padding: 15px 27px;
  width: 280px;
`;
