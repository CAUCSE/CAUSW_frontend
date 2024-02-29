import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { NavButton, PageFooter } from '@/components';
import { PAGE_URL } from '@/configs/path';
import { usePageUiStore } from '@/hooks';
import { useRootStore } from '@/stores';

export const SubmitButton: React.FC = observer(() => {
  const { replace } = useHistory();
  const {
    auth: { me, signOut },
    ui: { alert },
  } = useRootStore();
  const { update, target, submitDisabled } = usePageUiStore<PageUiStore.SettingRoleDelegation>();
  const handleSubmit = useCallback(async () => {
    if (me && target) {
      const role = me.role.split('_N_');
      const { success, message } = (await update(
        target,
        role[0] as User.UserDto['role'],
      )) as unknown as StoreAPI;

      if (success)
        alert({
          message: 'test',
          onClose: () => {
            signOut();
            replace(PAGE_URL.SignIn);
          },
        });
      else if (message) alert({ message });
    }
  }, [me, target]);

  return (
    <PageFooter>
      <NavButton onClick={handleSubmit} disabled={submitDisabled}>
        위임하기
      </NavButton>
    </PageFooter>
  );
});
