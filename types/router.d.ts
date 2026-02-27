import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    /** 页面标题 */
    title?: string;
    /** 不使用布局组件 */
    noLayout?: boolean;
    /** 路由组件缓存 */
    keepAlive?: boolean;
  }
}
