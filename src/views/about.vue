<script setup lang="ts">
  import pkg from 'package.json';
  import { useAppStore } from '@/stores/app';
  import { resolveRepoUrl, resolveNpmUrl } from '@/utils/resolve';

  definePage({
    meta: {
      title: '关于',
    },
  });

  const appStore = useAppStore();

  const repoUrl = resolveRepoUrl(pkg.repository.url);

  const toDeps = (deps: Record<string, string>) =>
    Object.entries(deps).map(([name, version]) => ({
      name,
      version,
      url: resolveNpmUrl(name),
    }));

  const dependencies = toDeps(pkg.dependencies);
  const devDependencies = toDeps(pkg.devDependencies);
</script>

<template>
  <div class="about">
    <ElCard shadow="never" class="mb-4">
      <div class="flex flex-col items-center gap-4 mb-6 md:flex-row">
        <ElAvatar :size="56" class="shrink-0 bg-[var(--el-color-primary)]">
          <IconEpEleme class="text-2xl" />
        </ElAvatar>
        <div class="text-center md:text-left">
          <ElLink :href="repoUrl" target="_blank" underline="never" class="about-title">
            {{ appStore.title }}
          </ElLink>
          <p class="text-sm text-[var(--el-text-color-secondary)] mt-1 mb-0">
            基于 Vue + Element Plus + TypeScript 的后台管理模板
          </p>
        </div>
      </div>
      <div class="flex flex-wrap gap-4">
        <div class="flex items-center shrink-0 gap-2 text-sm">
          <IconEpUser class="text-[var(--el-text-color-secondary)]" />
          <span class="text-[var(--el-text-color-secondary)]">作者</span>
          <ElTag size="small" effect="plain">{{ pkg.author }}</ElTag>
        </div>
        <div class="flex items-center shrink-0 gap-2 text-sm">
          <IconEpKey class="text-[var(--el-text-color-secondary)]" />
          <span class="text-[var(--el-text-color-secondary)]">协议</span>
          <ElTag size="small" effect="plain">MIT</ElTag>
        </div>
      </div>
    </ElCard>

    <ElRow :gutter="16">
      <ElCol :xs="24" :sm="12" class="mb-4 md:mb-0">
        <ElCard shadow="never">
          <template #header>
            <span>生产依赖</span>
          </template>
          <div class="flex flex-col gap-3">
            <div
              v-for="dep in dependencies"
              :key="dep.name"
              class="flex items-center justify-between"
            >
              <ElLink :href="dep.url" target="_blank" type="primary">{{ dep.name }}</ElLink>
              <ElTag size="small" type="info">{{ dep.version }}</ElTag>
            </div>
          </div>
        </ElCard>
      </ElCol>
      <ElCol :xs="24" :sm="12">
        <ElCard shadow="never">
          <template #header>
            <span>开发依赖</span>
          </template>
          <div class="flex flex-col gap-3">
            <div
              v-for="dep in devDependencies"
              :key="dep.name"
              class="flex items-center justify-between"
            >
              <ElLink :href="dep.url" target="_blank" type="primary">{{ dep.name }}</ElLink>
              <ElTag size="small" type="info">{{ dep.version }}</ElTag>
            </div>
          </div>
        </ElCard>
      </ElCol>
    </ElRow>
  </div>
</template>

<style scoped lang="scss">
  .about-title.el-link {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--el-text-color-primary);
  }
</style>
