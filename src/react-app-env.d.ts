/// <reference types="react-scripts" />

import { AuthStore } from './stores/AuthStore';
import { RootStore } from './stores/RootStore';

declare global {
  namespace Store {
    type Root = RootStore;
    type Auth = AuthStore;
    type Ui = UiStore;
  }
}
