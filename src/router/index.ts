import { useAppStore } from '@/stores/app';
import { createRouter, createWebHistory } from 'vue-router';
import { routes, handleHotUpdate } from 'vue-router/auto-routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    ...routes,
  ],
});

const PATH_LOGIN = '/login';
// 白名单
const whiteList = [PATH_LOGIN];

// 检查路径是否在白名单中（支持前缀匹配，如 '/auth' 会匹配 '/auth/login' 等子路由）
const isInWhiteList = (path: string) => {
  return whiteList.some((white) => path === white || path.startsWith(`${white}/`));
};

router.beforeEach((to) => {
  const appStore = useAppStore();

  if (appStore.token) {
    if (isInWhiteList(to.path)) {
      return '/';
    }
  } else {
    if (!isInWhiteList(to.path)) {
      return PATH_LOGIN;
    }
  }
});

router.afterEach((to) => {
  const appStore = useAppStore();
  const title = to.meta.title ? `${to.meta.title} | ${appStore.title}` : appStore.title;

  document.title = title;
});

if (import.meta.hot) {
  handleHotUpdate(router);
}

export default router;
