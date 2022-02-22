import { makeAutoObservable } from 'mobx';

export interface ToastMessage {
  key: number;
  message: string;
  onClose?: () => unknown;
}

export class ToastUi {
  messages: ToastMessage[] = [];
  duration = 3000;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}
