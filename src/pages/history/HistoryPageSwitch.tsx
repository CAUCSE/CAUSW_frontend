import { Route, Switch } from 'react-router-dom';

import { HistoryCommentPage } from './comment';
import { HistoryPostPage } from './post';

import { PAGE_URL } from '@/configs/path';

export const HistoryPageSwitch: React.FC = () => (
  <Switch>
    <Route path={PAGE_URL.HistoryPost} component={HistoryPostPage} />
    <Route path={PAGE_URL.HistoryComment} component={HistoryCommentPage} />
  </Switch>
);
