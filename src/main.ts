import 'virtual:uno.css';
import 'normalize.css';
import 'element-plus/dist/index.css';
import '@/styles/index.scss';

import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import ElementHooks from 'element-hooks';
import App from './App.vue';
import pinia from './stores';
import router from './router';

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(ElementHooks, {
  // https://element-hooks.js.org/guide/global-options#vue-plugin
});

await router.isReady();
app.mount('#app');
