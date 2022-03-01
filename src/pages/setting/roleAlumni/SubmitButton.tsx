import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { NavButton, PageFooter } from '@/components';
import { usePageUiStore } from '@/hooks';
import { useRootStore } from '@/stores';

export const SubmitButton: React.FC = observer(() => {
  const { state } = useLocation<{ user: Model.User }>();
  const { goBack } = useHistory();
  const {
    ui: { alert },
  } = useRootStore();
  const { update, target, submitDisabled } = usePageUiStore<PageUiStore.SettingRoleAlumni>();
  const handleSubmit = useCallback(async () => {
    if (!target || !state) return;

    const { success, message } = (await update(target, state.user)) as unknown as StoreAPI;

    if (success) {
      // TODO: 뒤페이지가 권한관리면 뒤로가기, 아니면 페이지 치환
      goBack();
      alert({
        message: `${target.nameWithAdmission} 유저가 동문회장으로 변경되었습니다.`,
      });
    } else if (message) alert({ message });
  }, [target, state]);

  return (
    <PageFooter>
      <NavButton onClick={handleSubmit} disabled={submitDisabled}>
        변경하기
      </NavButton>
    </PageFooter>
  );
});
