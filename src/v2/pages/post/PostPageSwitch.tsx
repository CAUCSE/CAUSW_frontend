import { Route, Switch } from 'react-router-dom';

import { PostEdit } from './edit';

import { PAGE_URL } from '@/configs/path';

export const PostPageSwitch: React.FC = () => (
  <Switch>
    <Route path={PAGE_URL.PostWrite} component={PostEdit} />
    {/* <Route path={PAGE_URL.PostDetail} component={PostDetail} /> */}
    {/* 
    <Route path={PAGE_URL.SignIn} component={SignIn} />
    <Route path={PAGE_URL.SignIn} component={SignIn} /> */}
  </Switch>
);
