import { observer } from 'mobx-react-lite';
import { useCallback, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { NavButton, PageFooter } from '@/components';
import { PAGE_URL } from '@/configs/path';
import { usePageUiStore } from '@/hooks';
import { useRootStore } from '@/stores';

interface FormBody {
  attachImage: FileList;
  description: string;
}

export const SubmitButton: React.FC<{ email?: string }> = observer(({ email }) => {
  const {
    ui: { alert },
  } = useRootStore();
  const { replace } = useHistory();
  const { isLoading, isDisabled, createAdmission, setSubmitDisabled } =
    usePageUiStore<PageUiStore.Admission>();
  const { handleSubmit, watch } = useFormContext();
  const onSubmit = useCallback(
    (email?: string) => async (body: FormBody) => {
      if (!email) return;

      const { success, message } = (await createAdmission({
        email,
        attachImage: body.attachImage.length ? body.attachImage[0] : null,
        description: body.description,
      })) as unknown as StoreAPI;

      if (success) {
        replace(PAGE_URL.SignIn);
        alert({
          message:
            '학부 인증이 제출되었습니다. 관리자의 승인 후 서비스 이용이 가능하오니 기다려 주시기 바랍니다.',
        });
      } else if (message) alert({ message });
    },
    [],
  );

  useEffect(() => {
    const subscription = watch(({ description, attachImage }) =>
      setSubmitDisabled(!description && !attachImage.length),
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <PageFooter>
      <NavButton onClick={handleSubmit(onSubmit(email))} loading={isLoading} disabled={isDisabled}>
        제출하기
      </NavButton>
    </PageFooter>
  );
});
