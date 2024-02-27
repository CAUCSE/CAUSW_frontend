import axios from 'axios';

import { PAGE_URL } from './path';

import { AuthRepoImpl as Repo } from '@/stores/repositories/AuthRepo';

export const API = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? import.meta.env.VITE_PROD_SERVER_URL
      : import.meta.env.VITE_DEV_SERVER_URL,
});

//Auth
export const setAccess = (token: string): unknown =>
  (API.defaults.headers['Authorization'] = token);
export const resetAccess = (): unknown => delete API.defaults.headers['Authorization'];

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
      const { response, config } = error;
      let data = response.data;

      // 4105로 가정
      if (data.errorCode === '4105') {
        if (localStorage.getItem(storageRefreshKey)) {
          Repo.updateAccessToken({
            refreshToken: localStorage.getItem(storageRefreshKey)!,
          })
            .then(() => {
              return API.request(config);
            })
            .catch(error => {
              removeRefresh();
              data = error.response.data;
              if (location.pathname !== PAGE_URL.SignIn) location.href = PAGE_URL.SignIn;
            });
        } else if (location.pathname !== PAGE_URL.SignIn) {
          removeRefresh();
          location.href = PAGE_URL.SignIn;
        }
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
