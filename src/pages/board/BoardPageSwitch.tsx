import { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { PAGE_URL } from '@/configs/path';

const PostEditor = lazy(() => import('./postEditor/PostEditorPage'));
const PostDetail = lazy(() => import('./postDetail/PostDetailPage'));
const PostList = lazy(() => import('./postList/PostListPage'));
const BoardList = lazy(() => import('./boardList/BoardListPage'));
const BoardCreate = lazy(() => import('./boardCreate/BoardCreatePage'));

export const BoardPageSwitch: React.FC = () => (
  <Switch>
    <Route path={PAGE_URL.PostWrite} component={PostEditor} />
    <Route path={PAGE_URL.PostEdit} component={PostEditor} />
    <Route path={PAGE_URL.PostDetail} component={PostDetail} />
    <Route path={PAGE_URL.PostList} component={PostList} />
    <Route path={PAGE_URL.BoardCreate} component={BoardCreate} />
    <Route exact path={PAGE_URL.Board} component={BoardList} />
  </Switch>
);
