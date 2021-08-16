import axios from 'axios';
import { PAGE_URL } from './path';

export const API = axios.create({
  baseURL: 'http://localhost:3000',
});

// 응답 인터셉터 추가
API.interceptors.response.use(
  response => response,
  error => {
    const {
      response: { status },
    } = error;

    if (status === 404) {
      location.href = PAGE_URL.Err404;
    } else if (status === 500) {
      location.href = PAGE_URL.Err404;
    }

    return Promise.reject(error);
  },
);
