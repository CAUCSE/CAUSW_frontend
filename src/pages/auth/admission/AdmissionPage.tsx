import { observer } from 'mobx-react-lite';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';

import { PageUiStoreImpl } from './AdmissionPageUiStore';
import { FileInput, Guide, InputIcon, Label, Textarea } from './styled';

import { BodyScreen, Header, PageBody, PageFooter, PageStoreHOC, NavButton } from '@/components';
import { PAGE_URL } from '@/configs/path';
import { useAuthRedirect, usePageUiStore } from '@/hooks';

const AdmissionPage: React.FC = observer(() => {
  const { replace } = useHistory();
  const { state } = useLocation<{ email?: string }>();
  const { setEmail, setFile, reset, blobUrl, createAdmission, submitDisabled } =
    usePageUiStore<PageUiStore.Admission>();
  const ref = useRef<HTMLInputElement | null>(null);
  const { register, handleSubmit } = useForm();
  const handleClick = () => ref.current?.click();

  useEffect(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.addEventListener('change', () => setFile((input.files ?? [])[0]));
    ref.current = input;

    if (state?.email) setEmail(state.email);
    else replace(PAGE_URL.Home);

    return () => reset();
  }, []);

  useAuthRedirect();

  return (
    <>
      <Header withBack title="학부인증" mini RightComponent={null} />
      <PageBody>
        <BodyScreen>
          <Guide>
            중앙대학교 전산학과 / 컴퓨터공학과 / 소프트웨어학부임을 인증할 수 있는 자료를
            첨부해주세요.
            <br />
            <br />
            예) 학생증, 졸업증명서, 포탈 내 개인정보 화면 캡처 등
          </Guide>
          <Label>사진 첨부</Label>
          <FileInput onClick={handleClick} blobUrl={blobUrl}>
            <InputIcon />
          </FileInput>
          <Label>설명 첨부</Label>
          <Textarea placeholder="설명을 첨부해주세요" {...register('description')} />
        </BodyScreen>
      </PageBody>
      <PageFooter>
        <NavButton onClick={handleSubmit(createAdmission)} disabled={submitDisabled}>
          제출하기
        </NavButton>
      </PageFooter>
    </>
  );
});

export default PageStoreHOC(<AdmissionPage />, { store: PageUiStoreImpl });
