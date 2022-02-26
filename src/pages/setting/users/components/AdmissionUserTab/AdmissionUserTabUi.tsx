import { makeAutoObservable } from 'mobx';

import { UserRepoImpl as Repo } from '@/stores/repositories/UserRepo';

export class AdmissionUserTabUi {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  *fetch(): Generator {
    yield Repo.findAllAdmissions();
  }
}
