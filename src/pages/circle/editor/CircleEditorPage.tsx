import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useParams, useRouteMatch } from 'react-router-dom';

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
import { CircleParams, PAGE_URL } from '@/configs/path';
import { usePageUiStore } from '@/hooks';

const CircleEditorPage: React.FC = observer(() => {
  const { circleId } = useParams<CircleParams>();
  const isEdit = !!useRouteMatch(PAGE_URL.CircleEdit);
  const { fetch, reset, circle, target } = usePageUiStore<PageUiStore.CircleEditor>();
  const methods = useForm({
    defaultValues: {
      mainImage: '',
      name: '',
      description: '',
      leaderId: '',
    },
  });

  useEffect(() => {
    if (isEdit) fetch(circleId);
    return () => reset();
  }, []);

  useEffect(() => {
    if (isEdit && circle) {
      methods.setValue('mainImage', circle.mainImage ?? '');
      methods.setValue('name', circle.name);
      methods.setValue('description', circle.description);
    }
  }, [circle]);

  useEffect(() => {
    if (target) methods.setValue('leaderId', target.id);
  }, [target]);

  return (
    <FormProvider {...methods}>
      <Header
        mini
        title="동아리 생성"
        withBack={isEdit ? PAGE_URL.Setting : PAGE_URL.SettingRoleManagement}
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
            placeholder="동아리에 대한 설명을 첨부해주세요."
            minRows={3}
            maxRows={10}
            {...methods.register('description')}
          />

          {!isEdit && (
            <>
              <Label style={{ marginBottom: '20px' }}>동아리장 지정</Label>
              <SearchUserForm guide="동아리장으로 지정할 유저를 검색해주세요" />
            </>
          )}
        </BodyScreen>
      </PageBody>
      <SubmitButton isEdit={isEdit} />
    </FormProvider>
  );
});

export default PageStoreHOC(<CircleEditorPage />, { store: PageUiStoreImpl });
