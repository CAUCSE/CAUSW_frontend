import { makeAutoObservable, runInAction } from 'mobx';

import { passwordReg } from '@/utils';

type BodyKeys = 'originPassword' | 'updatedPassword' | 'updatedPasswordConfirm';
export class SettingPasswordPageUiStore {
  body = {
    originPassword: '',
    updatedPassword: '',
    updatedPasswordConfirm: '',
  };
  error = {
    originPassword: '',
    updatedPassword: '',
    updatedPasswordConfirm: '',
  };
  submitDisabled = true;
  signInChecked = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  reset(): void {
    this.body.originPassword = '';
    this.body.updatedPassword = '';
    this.body.updatedPasswordConfirm = '';
    this.error.originPassword = '';
    this.error.updatedPassword = '';
    this.error.updatedPasswordConfirm = '';
    this.submitDisabled = true;
    this.signInChecked = false;
  }

  set(key: BodyKeys): (value: string) => void {
    return (value: string) => {
      runInAction(() => {
        const { body, error } = this;

        // 데이터 저장
        body[key] = value;
        error[key] = '';

        // 새 비밀번호가 입력된 경우, 비밀번호 정규식 확인
        if (key === 'updatedPassword') {
          error.updatedPassword =
            body.updatedPassword && !passwordReg.test(body.updatedPassword)
              ? '8자리 이상의 비밀번호를 입력하세요. (영어 + 숫자 + 특수문자)'
              : '';
        }

        // 새 비밀번호 및 확인이 입력됬지만 일치하지 않는 경우
        if (key !== 'originPassword') {
          error.updatedPasswordConfirm =
            body.updatedPassword && body.updatedPasswordConfirm && body.updatedPassword !== body.updatedPasswordConfirm
              ? '비밀번호가 일치하지 않습니다.'
              : '';
        }

        // 입력값이 없는 경우, 이미 에러가 있으면 해당 에러 호출
        error[key] = !value ? '비밀번호를 입력하세요.' : error[key] ? error[key] : '';

        // 모두 입력된 경우 버튼 활성화
        this.submitDisabled = !!(body.originPassword && body.updatedPassword && body.updatedPasswordConfirm);
      });
    };
  }

  // eslint-disable-next-line require-yield
  *update(evt: React.FormEvent): Generator {
    evt.preventDefault();
    this.submitDisabled = true;

    // 유효성 검사
    this.submitDisabled = false;
  }
}

export const PageUiStoreImpl = new SettingPasswordPageUiStore();
