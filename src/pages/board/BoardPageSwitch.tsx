import { Route, Switch } from 'react-router-dom';

import { BoardList } from './boardList';
import { PostList } from './postList';

import { PAGE_URL } from '@/configs/path';

export const BoardPageSwitch: React.FC = () => (
  <Switch>
    {/* <Route path={PAGE_URL.PostWrite} component={PostEditor} />
    <Route path={PAGE_URL.PostEdit} component={PostEditor} />
    <Route path={PAGE_URL.PostDetail} component={PostDetail} />
     */}
    <Route path={PAGE_URL.PostList} component={PostList} />
    <Route exact path={PAGE_URL.Board} component={BoardList} />
  </Switch>
);
