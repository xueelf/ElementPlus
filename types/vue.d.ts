import { ElMessage } from 'element-plus';

declare module 'vue' {
  interface ComponentCustomProperties {
    $message: typeof ElMessage;
  }
}
