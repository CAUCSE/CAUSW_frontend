import {
  AdmissionAcceptModalUi,
  AdmissionRejectModalUi,
  AdmissionUserTabUi,
  DropModalUi,
  RestoreModalUi,
  UserTabUi,
} from './components';

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
