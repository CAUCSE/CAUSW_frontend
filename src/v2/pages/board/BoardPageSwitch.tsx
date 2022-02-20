import { Route, Switch } from 'react-router-dom';

import { PostDetail } from './postDetail';

import { PAGE_URL } from '@/configs/path';

export const BoardPageSwitch: React.FC = () => (
  <Switch>
    <Route path={PAGE_URL.PostDetail} component={PostDetail} />
  </Switch>
);
