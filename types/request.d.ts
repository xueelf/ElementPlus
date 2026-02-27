import 'axios';

declare module 'axios' {
  interface AxiosRequestConfig {
    showSuccessMessage?: boolean;
  }
}

declare global {
  interface Result<T = unknown> {
    code: number;
    data: T;
    message: string;
  }
}
