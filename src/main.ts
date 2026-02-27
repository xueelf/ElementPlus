import 'virtual:uno.css';
import 'normalize.css';
import 'element-plus/dist/index.css';
import '@/styles/index.scss';

import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';
import pinia from './stores';
import router from './router';

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(ElementPlus);

await router.isReady();
app.mount('#app');
