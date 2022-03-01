import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Role } from './SettingRoleLeaderGradePageUiStore';

import { NavButton, PageFooter } from '@/components';
import { usePageUiStore } from '@/hooks';
import { useRootStore } from '@/stores';

export const SubmitButton: React.FC<{ role?: Role }> = observer(({ role }) => {
  const { goBack } = useHistory();
  const {
    ui: { alert },
  } = useRootStore();
  const { roleText, update, target, submitDisabled } =
    usePageUiStore<PageUiStore.SettingRoleLeaderGrade>();
  const handleSubmit = useCallback(async () => {
    if (!role || !target) return;

    const { success, message } = (await update(target, role)) as unknown as StoreAPI;

    if (success) {
      // TODO: 뒤페이지가 권한관리면 뒤로가기, 아니면 페이지 치환
      goBack();
      alert({
        message: `${target.nameWithAdmission} 유저가 ${roleText}로 추가 되었습니다.`,
      });
    } else if (message) alert({ message });
  }, [role, target]);

  return (
    <PageFooter>
      <NavButton onClick={handleSubmit} disabled={submitDisabled}>
        지정하기
      </NavButton>
    </PageFooter>
  );
});
