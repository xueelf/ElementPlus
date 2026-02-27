import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    /** 不使用布局组件 */
    noLayout?: boolean;
  }
}
