import { Route, Switch } from 'react-router-dom';

import { BoardList } from './boardList';
import { PostList } from './postList';

import { PAGE_URL } from '@/configs/path';

export const BoardPageSwitch: React.FC = () => (
  <Switch>
    <Route exact path={PAGE_URL.Board} component={BoardList} />
    <Route path={PAGE_URL.PostList} component={PostList} />
    {/* 
    <Route path={PAGE_URL.SignIn} component={SignIn} />
    <Route path={PAGE_URL.SignIn} component={SignIn} /> */}
  </Switch>
);
