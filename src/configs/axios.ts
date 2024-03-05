import axios, { AxiosResponse } from 'axios';

import { PAGE_URL } from './path';

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
let isStored: boolean = true;

export const storeRefresh = (auto: boolean, token: string): void => {
  isStored = auto;
  if (isStored) localStorage.setItem(storageRefreshKey, token);
  else sessionStorage.setItem(storageRefreshKey, token);
};
export const removeRefresh = (): void => {
  localStorage.removeItem(storageRefreshKey);
  sessionStorage.removeItem(storageRefreshKey);
};
export const getRefresh = (): string | null => {
  return localStorage.getItem(storageRefreshKey) ?? sessionStorage.getItem(storageRefreshKey);
};

API.interceptors.response.use(
  response => response,
  async error => {
    if (error.response) {
      const {
        response: { data },
        config,
      } = error;

      if (
        (!localStorage.getItem(storageRefreshKey) &&
          config.url !== '/api/v1/users/password/find' &&
          config.url !== '/api/v1/users/sign-up') ||
        config.url === '/api/v1/users/token/update'
      ) {
        removeRefresh();
        if (location.pathname !== PAGE_URL.SignIn) location.href = PAGE_URL.SignIn;
      } else if (data.errorCode === '4105') {
        const {
          data: { accessToken },
        } = (await API.put(`/api/v1/users/token/update`, {
          refreshToken: getRefresh(),
        })) as AxiosResponse<{
          accessToken: string;
        }>;

        setAccess(accessToken);

        config.headers['Authorization'] = accessToken;
        return API.request(config);
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
