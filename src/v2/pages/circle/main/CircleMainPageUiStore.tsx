import { CircleInfoModalUiStore } from './components/CircleInfoModal/CircleInfoModalUiStore';

export class CircleMainPageUiStore {
  infoModal: CircleInfoModalUiStore = new CircleInfoModalUiStore();
}

export const PageUiStoreImpl = new CircleMainPageUiStore();
