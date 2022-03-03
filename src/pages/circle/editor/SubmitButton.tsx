import { observer } from 'mobx-react-lite';
import { useCallback, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { NavButton, PageFooter } from '@/components';
import { usePageUiStore } from '@/hooks';
import { useRootStore } from '@/stores';

interface FormBody {
  name: string;
  description: string;
  leaderId: string;
}

export const SubmitButton: React.FC<{ isEdit: boolean }> = observer(({ isEdit }) => {
  const {
    ui: { alert },
  } = useRootStore();
  const { replace } = useHistory();
  const { submitDisabled, setSubmitDisabled } = usePageUiStore<PageUiStore.CircleEditor>();
  const { handleSubmit, watch } = useFormContext();

  const onSubmit = useCallback(async (body: FormBody) => {
    // const { success, message } = (await createAdmission({
    //   email,
    //   attachImage: body.attachImage.length ? body.attachImage[0] : null,
    //   description: body.description,
    // })) as unknown as StoreAPI;
    // if (success) {
    //   replace(PAGE_URL.SignIn);
    //   alert({
    //     message:
    //       '학부 인증이 제출되었습니다. 관리자의 승인 후 서비스 이용이 가능하오니 기다려 주시기 바랍니다.',
    //   });
    // } else if (message) alert({ message });
  }, []);

  useEffect(() => {
    const subscription = watch(({ name, description, leaderId }) =>
      setSubmitDisabled(!name || !description || !leaderId),
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <PageFooter>
      <NavButton onClick={handleSubmit(onSubmit)} disabled={submitDisabled}>
        {isEdit ? '저장하기' : '생성하기'}
      </NavButton>
    </PageFooter>
  );
});
