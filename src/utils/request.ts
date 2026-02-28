import axios from 'axios';
import { ElMessage } from 'element-plus';
import { useAppStore } from '@/stores/app';

const appStore = useAppStore();
const baseURL = import.meta.env.DEV
  ? import.meta.env.VITE_API_PATH
  : import.meta.env.VITE_BASE_URL + import.meta.env.VITE_API_PATH;

export const request = axios.create({
  baseURL,
});

request.interceptors.request.use(
  (config) => {
    if (appStore.token) {
      config.headers.setAuthorization(appStore.token);
    }
    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  (response) => {
    const { config, data: result } = response;

    if (config.responseType === 'blob') {
      return response;
    } else if (config.responseType === 'stream') {
      return response.data;
    }
    const { code, data, message = '发生未知错误' } = result as Result;

    if (code !== 200) {
      const error = new Error(message);

      ElMessage.error(message);
      return Promise.reject(error);
    } else if (code === 200 && config.showSuccessMessage) {
      ElMessage.success(message);
    }
    return data;
  },
  (error) => {
    console.error(error);
    ElMessage.error(error.message);

    return Promise.reject(error);
  },
);

export default request;
