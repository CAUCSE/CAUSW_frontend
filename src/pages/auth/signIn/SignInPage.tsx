import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { Checkbox } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useLayoutEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { PasswordInput } from './components';
import { CheckboxLabel, Form, Input, Link, LoginButton, LogoImage, PageWrapper, SubLink } from './styled';

import { PAGE_URL } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';
import { LayoutHOC } from '@/v2/components';

const SignInPage: React.FC = observer(() => {
  const { replace } = useHistory();
  const {
    auth: { signIn, isSignIn },
  } = useRootStore();
  const { control, handleSubmit } = useForm();

  useLayoutEffect(() => {
    if (isSignIn) replace(PAGE_URL.Home);
  }, [isSignIn]);

  return (
    <PageWrapper>
      <Form onSubmit={handleSubmit(signIn)}>
        <LogoImage src="/images/logo.png" />
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
        <Controller
          name="auto"
          control={control}
          render={({ field }) => (
            <CheckboxLabel label="로그인 상태 유지" control={<Checkbox {...field} size="small" />} />
          )}
        />
        <LoginButton type="submit">로그인</LoginButton>
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

export default LayoutHOC(SignInPage, { Nav: null });
