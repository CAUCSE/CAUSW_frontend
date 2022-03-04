import { observer } from 'mobx-react-lite';
import { useCallback, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';

import { NavButton, PageFooter } from '@/components';
import { CircleParams } from '@/configs/path';
import { usePageUiStore } from '@/hooks';
import { useRootStore } from '@/stores';

export interface FormBody {
  mainImage: FileList;
  name: string;
  description: string;
  leaderId: string;
}

export const SubmitButton: React.FC<{ isEdit: boolean }> = observer(({ isEdit }) => {
  const { circleId } = useParams<CircleParams>();
  const {
    ui: { alert },
  } = useRootStore();
  const { goBack } = useHistory();
  const { create, update, submitDisabled, setSubmitDisabled } =
    usePageUiStore<PageUiStore.CircleEditor>();
  const { handleSubmit, watch } = useFormContext();

  const onSubmit = useCallback(
    async (body: FormBody) => {
      let result: StoreAPI, message: string;

      if (isEdit) {
        result = (await update(circleId, body)) as unknown as StoreAPI;
        message = `[ ${body.name}] 소모임이 수정되었습니다.`;
      } else {
        result = (await create(body)) as unknown as StoreAPI;
        message = `[ ${body.name}] 소모임이 생성되었습니다.`;
      }

      if (result.success) {
        alert({ message });
        goBack();
      } else if (result.message) alert({ message: result.message });
    },
    [isEdit, circleId],
  );

  useEffect(() => {
    const subscription = watch(({ name, description, leaderId }) => {
      if (isEdit) setSubmitDisabled(!name || !description);
      else setSubmitDisabled(!name || !description || !leaderId);
    });
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
