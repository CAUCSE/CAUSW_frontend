import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { Checkbox } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { Controller, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { PasswordInput } from './components';
import { PageUiStoreImpl } from './SignInPageUiStore';
import {
  CheckboxLabel,
  Form,
  Input,
  Link,
  LoginButton,
  LogoImage,
  PageWrapper,
  SubLink,
} from './styled';

import { PageStoreHOC } from '@/components';
import { PAGE_URL } from '@/configs/path';
import { useAuthRedirect, usePageUiStore } from '@/hooks';

const SignInPage: React.FC = observer(() => {
  const { replace, push } = useHistory();
  const { signIn } = usePageUiStore<PageUiStore.SignIn>();
  const { control, handleSubmit } = useForm();
  const onSubmit = async (body: User.SignInRequestDto) => {
    const { success, errorCode, message } = (await signIn(body)) as unknown as StoreAPI;

    if (success) replace(PAGE_URL.Home);
    else if (errorCode === 4011) push(PAGE_URL.Admission, { email: body.email });
    else if (message) alert(message);
  };

  useAuthRedirect();

  return (
    <PageWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
            <CheckboxLabel
              label="로그인 상태 유지"
              control={<Checkbox {...field} size="small" />}
            />
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

export default PageStoreHOC(<SignInPage />, { store: PageUiStoreImpl });
