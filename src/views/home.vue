<script setup lang="ts">
  import { useAppStore } from '@/stores/app';

  definePage({
    meta: {
      title: '首页',
    },
  });

  const appStore = useAppStore();

  const features = [
    { icon: 'i-ep-box', title: 'Vue', desc: '渐进式 JavaScript 框架，组合式 API' },
    { icon: 'i-ep-menu', title: 'Element Plus', desc: '丰富的 UI 组件库，开箱即用' },
    { icon: 'i-ep-lightning', title: 'Vite', desc: '极速的开发体验，秒级热更新' },
    { icon: 'i-ep-document', title: 'TypeScript', desc: '完整的类型支持，提升开发体验' },
    { icon: 'i-ep-data-board', title: 'Pinia', desc: '类型安全的状态管理' },
    {
      icon: 'i-ep-guide',
      title: 'Vue Router',
      desc: '文件级路由、认证守卫、KeepAlive 缓存',
    },
    { icon: 'i-ep-brush', title: 'UnoCSS', desc: '原子化 CSS 引擎，按需生成' },
    {
      icon: 'i-ep-connection',
      title: 'Axios',
      desc: '强大的 HTTP 客户端，请求拦截封装',
    },
    { icon: 'i-ep-coin', title: 'Radash', desc: '现代化工具函数库，零依赖轻量实用' },
    {
      icon: 'i-ep-operation',
      title: 'Element Hooks',
      desc: 'Element Plus 组合式函数扩展',
    },
    {
      icon: 'i-ep-files',
      title: 'Auto Import',
      desc: '自动导入组件和 API，无需手动 import',
    },
    {
      icon: 'i-ep-magic-stick',
      title: 'Iconify',
      desc: '海量图标集，自动导入按需加载',
    },
    { icon: 'i-ep-checked', title: 'ESLint', desc: '代码规范检查，统一代码风格' },
    { icon: 'i-ep-edit', title: 'Prettier', desc: '自动代码格式化，保持一致性' },
    {
      icon: 'i-ep-chat-line-round',
      title: 'Commitlint',
      desc: '规范化 Git 提交信息',
    },
  ];

  const quickLinks = [
    { title: 'Vue 3', url: 'https://vuejs.org/' },
    { title: 'Element Plus', url: 'https://element-plus.org/' },
    { title: 'Vite', url: 'https://vite.dev/' },
    { title: 'TypeScript', url: 'https://www.typescriptlang.org/' },
    { title: 'Pinia', url: 'https://pinia.vuejs.org/' },
    { title: 'Vue Router', url: 'https://router.vuejs.org/' },
    { title: 'UnoCSS', url: 'https://unocss.dev/' },
    { title: 'Axios', url: 'https://axios-http.com/' },
    { title: 'Radash', url: 'https://radash-docs.vercel.app/' },
    { title: 'Element Hooks', url: 'https://element-hooks.js.org/' },
    { title: 'Iconify', url: 'https://icon-sets.iconify.design/' },
    { title: 'ESLint', url: 'https://eslint.org/' },
    { title: 'Prettier', url: 'https://prettier.io/' },
    { title: 'Commitlint', url: 'https://commitlint.js.org/' },
  ];
</script>

<template>
  <div class="home">
    <ElCard shadow="never" class="mb-4">
      <div class="flex flex-col items-center gap-4 md:flex-row">
        <GithubAvatar :size="56" id="xueelf" class="shrink-0" />
        <div class="text-center md:text-left">
          <h3 class="m-0 text-lg">欢迎回来，Yuki</h3>
          <p class="m-0 mt-1 text-sm color-[var(--el-text-color-secondary)]">
            {{ appStore.title }} · 基于 Vue 3 + Element Plus 的开发模板
          </p>
        </div>
      </div>
    </ElCard>

    <ElRow :gutter="16" class="mb-4">
      <ElCol
        v-for="item in features"
        :key="item.title"
        :xs="24"
        :sm="12"
        :md="8"
        :lg="6"
        class="mb-4"
      >
        <ElCard shadow="hover" class="h-full">
          <div class="flex items-start gap-3">
            <div class="text-xl color-[var(--el-color-primary)]">
              <i :class="item.icon" />
            </div>
            <div>
              <h4 class="m-0 text-sm">{{ item.title }}</h4>
              <p class="m-0 mt-1 text-xs color-[var(--el-text-color-secondary)]">
                {{ item.desc }}
              </p>
            </div>
          </div>
        </ElCard>
      </ElCol>
    </ElRow>

    <ElCard shadow="never">
      <template #header>
        <span>快速链接</span>
      </template>
      <div class="flex flex-wrap gap-3">
        <ElLink
          v-for="link in quickLinks"
          :key="link.url"
          :href="link.url"
          target="_blank"
          type="primary"
        >
          {{ link.title }}
        </ElLink>
      </div>
    </ElCard>
  </div>
</template>

<style scoped lang="scss"></style>
