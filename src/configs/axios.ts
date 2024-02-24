import axios from 'axios';

import { PAGE_URL } from './path';

export const API = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? import.meta.env.VITE_PROD_SERVER_URL
      : import.meta.env.VITE_DEV_SERVER_URL,
});

//Auth
export const setAuth = (token: string): unknown => (API.defaults.headers['Authorization'] = token);
export const resetAuth = (): unknown => delete API.defaults.headers['Authorization'];

const storageAuthKey = 'CAUCSE_JWT_AUTH';

export const storeAuth = (isStored: boolean, token: string): void => {
  if (isStored) localStorage.setItem(storageAuthKey, token);
  else sessionStorage.setItem(storageAuthKey, token);
};
export const restoreAuth = (): boolean => {
  const token = localStorage.getItem(storageAuthKey) ?? sessionStorage.getItem(storageAuthKey);

  if (token) setAuth(token);

  return !!token;
};
export const removeAuth = (): void => {
  localStorage.removeItem(storageAuthKey);
  sessionStorage.removeItem(storageAuthKey);
};

//Refresh
const storageRefreshKey = 'CAUCSE_JWT_REFRESH';

export const storeRefresh = (token: string): void => {
  localStorage.setItem(storageRefreshKey, token);
};
export const removeRefresh = (): void => {
  localStorage.removeItem(storageRefreshKey);
};
export const getRefresh = (): string | null => {
  return localStorage.getItem(storageRefreshKey);
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
