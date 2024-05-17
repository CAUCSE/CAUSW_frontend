import { Route, Switch } from 'react-router-dom';

import { Admission } from './admission';
import ApiError from './apiError/ApiErrorPage';
import { FindPassword } from './findPassword';
import { NoPermission } from './noPermission';
import { SignIn } from './signIn';
import { SignUp } from './signUp';
import { UseTerms } from './useTerms';

import { PAGE_URL } from '@/configs/path';

export const AuthPageSwitch: React.FC = () => (
  <Switch>
    <Route path={PAGE_URL.SignIn} component={SignIn} />
    <Route path={PAGE_URL.Admission} component={Admission} />
    <Route path={PAGE_URL.SignUp} component={SignUp} />
    <Route path={PAGE_URL.UseTerms} component={UseTerms} />
    <Route path={PAGE_URL.FindPassword} component={FindPassword} />
    <Route path={PAGE_URL.NoPermission} component={NoPermission} />
    <Route path={PAGE_URL.ApiError} component={ApiError} />
  </Switch>
);
