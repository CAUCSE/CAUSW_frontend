import { Route, Switch } from 'react-router-dom';

// import { HistoryCommentPage } from './historyComment';
// import { HistoryPostPage } from './historyPost';
import { SettingHomePage } from './home';
// import { SettingPasswordPage } from './password';
// import { SettingProfilePage } from './profile';

import { PAGE_URL } from '@/configs/path';

export const SettingPageSwitch: React.FC = () => (
  <Switch>
    <Route path={PAGE_URL.Setting} exact component={SettingHomePage} />
    {/* <Route path={PAGE_URL.SettingProfile} component={SettingProfilePage} />
    <Route path={PAGE_URL.SettingPassword} component={SettingPasswordPage} />
    <Route path={PAGE_URL.SettingHistoryPost} component={HistoryPostPage} />
    <Route path={PAGE_URL.SettingHistoryComment} component={HistoryCommentPage} /> */}
  </Switch>
);
