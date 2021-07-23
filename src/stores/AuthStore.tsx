export class AuthStore {
  rootStore: Store.Root;

  constructor(rootStore: Store.Root) {
    this.rootStore = rootStore;
  }

  private _isSignIn = false; // 임시
  get isSignIn(): boolean {
    return this._isSignIn;
  }
}
