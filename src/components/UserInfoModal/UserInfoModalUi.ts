import { ModalUi } from '@/stores';

export class UserInfoModalUi extends ModalUi<Model.User> {
  constructor() {
    super();
  }
}

export interface WithUserInfoModalUi {
  userInfoModal: UserInfoModalUi;
}
