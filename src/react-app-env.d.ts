/// <reference types="react-scripts" />

import type { RootStore } from './stores/RootStore';
import type { AuthStore } from './stores/AuthStore';
import type { UiStore } from './stores/UiStore';

declare global {
  namespace Store {
    type Root = RootStore;
    type Auth = AuthStore;
    type Ui = UiStore;
  }
}
