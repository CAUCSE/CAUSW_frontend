import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouteMatch } from 'react-router-dom';

import { PageUiStoreImpl } from './CircleEditorPageUiStore';
import { Label, Textarea } from './styled';
import { SubmitButton } from './SubmitButton';

import {
  BodyScreen,
  Header,
  ImageInput,
  Input,
  PageBody,
  PageStoreHOC,
  SearchUserForm,
} from '@/components';
import { PAGE_URL } from '@/configs/path';
import { usePageUiStore } from '@/hooks';

const CircleEditorPage: React.FC = observer(() => {
  const isEdit = !!useRouteMatch(PAGE_URL.CircleEdit);
  const { target, reset } = usePageUiStore<PageUiStore.CircleEditor>();
  const methods = useForm({
    defaultValues: {
      name: '',
      description: '',
      leaderId: '',
    },
  });

  useEffect(() => {
    if (target) methods.setValue('leaderId', target.id);
  }, [target]);

  useEffect(() => () => reset(), []);

  return (
    <FormProvider {...methods}>
      <Header
        mini
        title="소모임 생성"
        withBack={PAGE_URL.SettingRoleManagement}
        RightComponent={null}
      />
      <PageBody>
        <BodyScreen style={{ paddingBottom: '50px' }}>
          <Label>사진 첨부</Label>
          <ImageInput name="mainImage" />

          <Label>이름</Label>
          <Input name="name" control={methods.control} placeholder="이름을 입력해주세요." />

          <Label>설명</Label>
          <Textarea
            placeholder="소모임에 대한 설명을 첨부해주세요."
            {...methods.register('description')}
            maxLength={254}
            maxRows={6}
          />

          {!isEdit && (
            <>
              <Label style={{ marginBottom: '20px' }}>소모임장 지정</Label>
              <SearchUserForm guide="소모임장으로 지정할 유저를 검색해주세요" />
            </>
          )}
        </BodyScreen>
      </PageBody>
      <SubmitButton isEdit={isEdit} />
    </FormProvider>
  );
});

export default PageStoreHOC(<CircleEditorPage />, { store: PageUiStoreImpl });
