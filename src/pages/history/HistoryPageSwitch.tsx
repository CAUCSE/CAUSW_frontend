import { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const HistoryCommentPage = lazy(() => import('./comment/HistoryCommentPage'));
const HistoryPostPage = lazy(() => import('./post/HistoryPostPage'));

import { PAGE_URL } from '@/configs/path';

export const HistoryPageSwitch: React.FC = () => (
  <Switch>
    <Route path={PAGE_URL.HistoryPost} component={HistoryPostPage} />
    <Route path={PAGE_URL.HistoryComment} component={HistoryCommentPage} />
  </Switch>
);
