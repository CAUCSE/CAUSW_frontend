import styled from '@emotion/styled';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { Checkbox, FormControlLabel, typographyClasses, checkboxClasses } from '@mui/material';
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
      auto: true,
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
              placeholder="이메일"
              InputProps={{
                startAdornment: <PermIdentityOutlinedIcon sx={{ fontSize: 16 }} />,
              }}
              {...field}
            />
          )}
        />
        <PasswordInput control={control} />
        <Controller
          name="auto"
          control={control}
          render={({ field }) => (
            <CheckboxLabel
              label="로그인 상태 유지"
              control={<Checkbox {...field} size="small" defaultChecked={true} />}
            />
          )}
        />
        <LoginButton type="submit" $loading={isLoading} disabled={isDisabled}>
          로그인
        </LoginButton>
      </Form>

      <SubLink>
        <Link to={PAGE_URL.UseTerms}>회원가입</Link>
        <Link to={PAGE_URL.FindPassword}>비밀번호를 잃어버리셨나요?</Link>
      </SubLink>
    </PageWrapper>
  );
});

const CheckboxLabel = styled(FormControlLabel)`
  margin-top: 9px;
  margin-left: 6px;

  .${typographyClasses.root} {
    margin-top: 3px;
    font-size: 12px;
    line-height: 14px;
  }

  .${checkboxClasses.root} {
    padding: 7px;
  }
`;

export default PageStoreHOC(<SignInPage />, { store: PageUiStoreImpl });
