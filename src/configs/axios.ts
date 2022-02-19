import axios from 'axios';

import { PAGE_URL } from './path';

export const API = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/' : 'https://dev-api.causw.net',
  // baseURL: 'https://dev-api.causw.net',
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
};

API.interceptors.response.use(
  response => response,
  error => {
    const {
      response: { data },
    } = error;

    if (data.errorCode === '4105') {
      // message: "다시 로그인 해주세요."
      location.href = PAGE_URL.SignIn;
      removeAuth();
    }

    return Promise.reject({
      success: false,
      ...data,
    });
  },
);
