import axios from 'axios';

import { PAGE_URL } from './path';

export const API = axios.create({
  baseURL:
    process.env.REACT_APP_ENV === 'production'
      ? 'https://causw-prod.du.r.appspot.com'
      : 'https://causw-dev.du.r.appspot.com',
});

export const setAuth = (token: string): unknown => (API.defaults.headers['Authorization'] = token);
export const resetAuth = (): unknown => delete API.defaults.headers['Authorization'];

const storageKey = 'CAUCSE_JWT';

export const storeAuth = (isStored: boolean, token: string): void => {
  if (isStored) localStorage.setItem(storageKey, token);
  else sessionStorage.setItem(storageKey, token);
};
export const restoreAuth = (): boolean => {
  const token = localStorage.getItem(storageKey) ?? sessionStorage.getItem(storageKey);

  if (token) setAuth(token);

  return !!token;
};
export const removeAuth = (): void => {
  localStorage.removeItem(storageKey);
  sessionStorage.removeItem(storageKey);
};

API.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      const {
        response: { data },
      } = error;

      // 4012: 접근 권한이 없습니다. 다시 로그인 해주세요. 문제 반복시 관리자에게 문의해주세요.
      // 4103: 비활성화된 사용자 입니다.
      // 4015: 다시 로그인 해주세요.

      if (data.errorCode === 4012 || data.errorCode === 4103 || data.errorCode === 4105) {
        removeAuth();
        if (location.pathname !== PAGE_URL.SignIn) location.href = PAGE_URL.SignIn;
      }

      return Promise.reject({
        success: false,
        ...data,
      });
    }

    return Promise.reject({
      success: false,
    });
  },
);
