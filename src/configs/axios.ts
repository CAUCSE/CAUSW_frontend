import axios, { AxiosResponse } from 'axios';
import rateLimit from 'axios-rate-limit';

import { PAGE_URL } from './path';

export const API = rateLimit(
  axios.create({
    baseURL:
      process.env.NODE_ENV === 'production'
        ? import.meta.env.VITE_PROD_SERVER_URL
        : import.meta.env.VITE_DEV_SERVER_URL,
  }),
  { maxRequests: 3, perMilliseconds: 1000 },
);

//Auth
export const setAccess = (token: string): unknown =>
  (API.defaults.headers['Authorization'] = token);
export const resetAccess = (): unknown => delete API.defaults.headers['Authorization'];
export const getAccess = (): string => `${API.defaults.headers['Authorization']}`;

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
        config.url === '/api/v1/users/token/update' ||
        data.errorCode === '4101' ||
        data.errorCode === 4101 ||
        data.errorCode === '4102' ||
        data.errorCode === 4102 ||
        data.errorCode === '4103' ||
        data.errorCode === 4103 ||
        data.errorCode === '4104' ||
        data.errorCode === 4104 ||
        data.errorCode === '4012' ||
        data.errorCode === 4012 ||
        data.errorCode === '4109' ||
        data.errorCode === 4109
      ) {
        removeRefresh();
        if (location.pathname !== PAGE_URL.SignIn) location.href = PAGE_URL.SignIn;
      } else if (data.errorCode === '4105' || data.errorCode === 4105) {
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
      } else if (
        data.errorCode === '4107' ||
        data.errorCode === 4107 ||
        data.errorCode === '4000' ||
        data.errorCode === 4000
      ) {
        location.href = PAGE_URL.NoPermission;
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
