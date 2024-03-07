import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';

import { PageUiStoreImpl } from './AdmissionPageUiStore';
import { Guide, Label, Textarea } from './styled';
import { SubmitButton } from './SubmitButton';

import { BodyScreen, Header, ImageInput, PageBody, PageStoreHOC } from '@/components';
import { PAGE_URL } from '@/configs/path';
import { useAuthRedirect, usePageUiStore } from '@/hooks';

const AdmissionPage: React.FC = observer(() => {
  const { replace } = useHistory();
  const { state } = useLocation<{ email?: string }>();
  const { reset } = usePageUiStore<PageUiStore.Admission>();
  const methods = useForm();

  useEffect(() => {
    if (!state?.email) replace(PAGE_URL.Home);
    return () => reset();
  }, []);

  useAuthRedirect();

  return (
    <FormProvider {...methods}>
      <Header withBack title="학부인증" mini RightComponent={null} />
      <PageBody>
        <BodyScreen>
          <Guide>
            중앙대학교 전산학과 / 컴퓨터공학과 / 소프트웨어학부임을 인증할 수 있는 자료를
            첨부해주세요. 변경이 불가능하니 주의하여 입력하세요.
            <br />
            <br />
            (학번/이름이 포함되게 하여 학생증, 졸업증명서, 포탈 내 개인정보 화면 캡처 중 하나 기입)
          </Guide>

          <Label>사진 첨부</Label>
          <ImageInput name="attachImage" />
          <Label>설명 첨부</Label>
          <Textarea
            placeholder="사진에 대한 설명을 첨부해주세요"
            {...methods.register('description')}
            maxLength={254}
          />
        </BodyScreen>
      </PageBody>
      <SubmitButton email={state?.email} />
    </FormProvider>
  );
});

export default PageStoreHOC(<AdmissionPage />, { store: PageUiStoreImpl });
