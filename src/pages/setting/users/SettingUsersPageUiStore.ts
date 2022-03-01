import { ActiveUserTabUi } from './components/ActiveUserTab/ActiveUserTabUi';
import { AdmissionAcceptModalUi } from './components/AdmissionAcceptModal/AdmissionAcceptModalUi';
import { AdmissionInfoModalUi } from './components/AdmissionInfoModal/AdmissionInfoModalUi';
import { AdmissionRejectModalUi } from './components/AdmissionRejectModal/AdmissionRejectModalUi';
import { AdmissionUserTabUi } from './components/AdmissionUserTab/AdmissionUserTabUi';
import { DropModalUi } from './components/DropModal/DropModalUi';
import { InactiveUserTabUi } from './components/InactiveUserTab/InactiveUserTabUi';

import { UserInfoModalUi, WithUserInfoModalUi } from '@/components/UserInfoModal/UserInfoModalUi';

export class SettingUsersPageUiStore implements WithUserInfoModalUi {
  // Tab
  admissionTab = new AdmissionUserTabUi();
  activeTab = new ActiveUserTabUi();
  inactiveTab = new InactiveUserTabUi();
  // Modal
  admissionInfoModal = new AdmissionInfoModalUi();
  admissionAcceptModal = new AdmissionAcceptModalUi();
  admissionRejectModal = new AdmissionRejectModalUi();
  userInfoModal = new UserInfoModalUi();
  dropModal = new DropModalUi();
}

export const PageUiStoreImpl = new SettingUsersPageUiStore();
