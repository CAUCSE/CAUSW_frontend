import { action, makeObservable, observable } from 'mobx';

import { ModalUi } from '@/stores';

export class AdmissionInfoModalUi extends ModalUi<Model.AdmissionUser> {
  visibleImageViewer = false;

  constructor() {
    super();
    makeObservable(this, {
      visibleImageViewer: observable,
      openImageViewer: action.bound,
      closeImageViewer: action.bound,
    });
  }

  openImageViewer(): void {
    this.visibleImageViewer = true;
  }

  closeImageViewer(): void {
    this.visibleImageViewer = false;
  }
}
