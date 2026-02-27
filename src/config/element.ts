import type { ConfigProviderProps } from 'element-plus';

// https://element-plus.org/zh-CN/component/config-provider
export default {
  button: {
    round: true,
  },
  dialog: {
    draggable: true,
  },
} satisfies Partial<ConfigProviderProps>;
