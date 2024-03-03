import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';

import { PasswordInput } from './components';
import { PageUiStoreImpl } from './SignInPageUiStore';
import { Form, Input, Link, LoginButton, LogoImage, PageWrapper, SubLink } from './styled';

import { PageStoreHOC } from '@/components';
import { PAGE_URL } from '@/configs/path';
import { useAuthRedirect, usePageUiStore } from '@/hooks';
import { useRootStore } from '@/stores';

const SignInPage: React.FC = observer(() => {
  const {
    ui: { alert },
  } = useRootStore();
  const { replace, push } = useHistory();
  const { reset, signIn, isDisabled, isLoading } = usePageUiStore<PageUiStore.SignIn>();
  const { state } = useLocation<{ from: Location }>();
  const { control, handleSubmit } = useForm<User.SignInRequestDto>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = async (body: User.SignInRequestDto) => {
    const { success, errorCode, message } = (await signIn(body)) as unknown as StoreAPI;

    if (success) replace(state.from.pathname === '' ? PAGE_URL.Home : state.from.pathname);
    else if (errorCode === 4011) push(PAGE_URL.Admission, { email: body.email });
    else if (message) alert({ message });
  };

  useAuthRedirect();

  useEffect(() => {
    reset();
  }, [reset]);

  return (
    <PageWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <LogoImage src="/images/logo.png" alt="uniform_logo" />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              type="email"
              placeholder="아이디"
              InputProps={{
                startAdornment: <PermIdentityOutlinedIcon sx={{ fontSize: 16 }} />,
              }}
              {...field}
            />
          )}
        />
        <PasswordInput control={control} />
        <LoginButton type="submit" $loading={isLoading} disabled={isDisabled}>
          로그인
        </LoginButton>
      </Form>

      <SubLink>
        <Link to={PAGE_URL.SignUp}>회원가입</Link>
        {/* TODO: 개발
        <Link to={PAGE_URL.SignUp}>아이디 찾기</Link> */}
        {/* TODO: 개발
        <Link to={PAGE_URL.SignUp}>비밀번호 찾기</Link> */}
      </SubLink>
    </PageWrapper>
  );
});

export default PageStoreHOC(<SignInPage />, { store: PageUiStoreImpl });
