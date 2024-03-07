import { AdmissionAcceptModalUi } from './components/AdmissionAcceptModal/AdmissionAcceptModalUi';
import { AdmissionRejectModalUi } from './components/AdmissionRejectModal/AdmissionRejectModalUi';
import { AdmissionUserTabUi } from './components/AdmissionUserTab/AdmissionUserTabUi';
import { DropModalUi } from './components/DropModal/DropModalUi';
import { RestoreModalUi } from './components/RestoreModal/RestoreModalUi';
import { UserTabUi } from './components/UserTab/UserTabUi';

import { UserInfoModalUi, WithUserInfoModalUi } from '@/components/UserInfoModal/UserInfoModalUi';

export class CircleUsersPageUiStore implements WithUserInfoModalUi {
  // Tab
  admissionTab = new AdmissionUserTabUi();
  userTab = new UserTabUi();

  // Modal
  admissionAcceptModal = new AdmissionAcceptModalUi();
  admissionRejectModal = new AdmissionRejectModalUi();
  userInfoModal = new UserInfoModalUi();
  dropModal = new DropModalUi();

  restoreModal = new RestoreModalUi();
}

export const PageUiStoreImpl = new CircleUsersPageUiStore();
