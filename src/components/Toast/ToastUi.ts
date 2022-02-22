import { makeAutoObservable } from 'mobx';

export interface ToastMessage {
  key: number;
  message: string;
  onClose?: () => unknown;
}

export class ToastUi {
  messages: ToastMessage[] = [];
  duration = 1000;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}
