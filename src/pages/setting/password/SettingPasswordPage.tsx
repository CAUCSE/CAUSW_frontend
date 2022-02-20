import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { PageUiStoreImpl } from './SettingPasswordPageUiStore';
import { GuideText } from './styled';

import {
  BodyScreen,
  ErrorMessage,
  Header,
  PageBody,
  PageFooter,
  PageStoreHOC,
  PasswordInput,
} from '@/components';
import { PAGE_URL } from '@/configs/path';
import { usePageUiStore } from '@/hooks';
import { useRootStore } from '@/stores/RootStore';
import { passwordReg } from '@/utils';
import { NavButton } from '@/v2/components';

const SettingPasswordPage: React.FC = observer(() => {
  const { replace } = useHistory();
  const {
    auth: { signOut },
  } = useRootStore();
  const { submitDisabled, update } = usePageUiStore<PageUiStore.SettingPassword>();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const updatedPassword = watch('updatedPassword');
  const onSubmit = async (body: User.PasswordUpdateRequestDto) => {
    const { success, message } = (await update(body)) as unknown as StoreAPI;
    if (success) {
      alert('비밀번호가 변경되었습니다. 보안을 위해 다시 로그인 해주세요.');
      setTimeout(() => {
        signOut();
        replace(PAGE_URL.SignIn);
      }, 1000);
    } else if (message) alert(message);
  };

  return (
    <>
      <Header title="비밀번호 변경" mini withBack={PAGE_URL.Setting} RightComponent={null} />
      <PageBody>
        <BodyScreen>
          <br />

          <PasswordInput
            name="originPassword"
            label="현재 비밀번호"
            placeholder="현재 비밀번호"
            required
            control={control}
            rules={{
              required: '비밀번호를 입력해주세요.',
            }}
          />
          {errors.originPassword ? (
            <ErrorMessage>{errors.originPassword?.message}</ErrorMessage>
          ) : null}

          <PasswordInput
            name="updatedPassword"
            label="새 비밀번호"
            placeholder="새 비밀번호"
            required
            control={control}
            rules={{
              required: '비밀번호를 입력해주세요.',
              pattern: {
                value: passwordReg,
                message: '8자리 이상의 비밀번호를 입력하세요.<br/>(영어 + 숫자 + 특수문자)',
              },
            }}
          />
          {errors.updatedPassword ? (
            <ErrorMessage dangerouslySetInnerHTML={{ __html: errors.updatedPassword?.message }} />
          ) : null}

          <PasswordInput
            name="updatedPasswordConfirm"
            label="새 비밀번호 확인"
            placeholder="새 비밀번호 확인"
            required
            control={control}
            rules={{
              required: '비밀번호를 입력해주세요.',
              validate: value => value === updatedPassword || '비밀번호가 일치하지 않습니다.',
            }}
          />
          {errors.updatedPasswordConfirm ? (
            <ErrorMessage>{errors.updatedPasswordConfirm?.message}</ErrorMessage>
          ) : null}

          <GuideText>
            * 새로운 비밀번호는 8자리 이상의 비밀번호를 입력하세요 (영어 + 숫자 + 특수문자 포함)
            <br />
            * 특수 문자: # ? ! @ $ % ^ & * -
            <br />
          </GuideText>
        </BodyScreen>
      </PageBody>
      <PageFooter>
        <NavButton onClick={handleSubmit(onSubmit)} disabled={submitDisabled}>
          비밀번호 변경
        </NavButton>
      </PageFooter>
    </>
  );
});

export default PageStoreHOC(<SettingPasswordPage />, { store: PageUiStoreImpl });
