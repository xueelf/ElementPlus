<script setup lang="ts">
  import { repository } from 'package.json';
  import { useAppStore } from '@/stores/app';
  import { resolveRepoUrl } from '@/utils/resolve';

  const router = useRouter();
  const appStore = useAppStore();
  const messageBox = useMessageBox();

  function openRepo() {
    window.open(resolveRepoUrl(repository.url), '_blank');
  }

  async function handleLogout() {
    const isConfirmed = await messageBox.confirm('确认退出登录？', '提示', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
    });

    if (isConfirmed) {
      appStore.clearToken();
      router.replace('/login');
    }
  }
</script>

<template>
  <div class="layout-header">
    <RouterLink to="/" class="layout-header__left">
      <img src="@/assets/logo.svg" alt="logo" class="layout-header__logo" />
      <span class="layout-header__name">{{ appStore.title }}</span>
    </RouterLink>
    <div class="layout-header__right">
      <ElDropdown>
        <span class="layout-header__user">
          <GithubAvatar :size="28" id="xueelf" />
          <span class="ml-2">Yuki</span>
        </span>
        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem @click="openRepo"> 项目仓库 </ElDropdownItem>
            <ElDropdownItem divided @click="handleLogout">退出登录</ElDropdownItem>
          </ElDropdownMenu>
        </template>
      </ElDropdown>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .layout-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 0 16px;

    &__left {
      display: flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
      cursor: pointer;
    }

    &__logo {
      width: 28px;
      height: 28px;
    }

    &__name {
      font-size: 16px;
      font-weight: 600;
      color: var(--el-text-color-primary);
      white-space: nowrap;
    }

    &__right {
      display: flex;
      align-items: center;
    }

    &__user {
      display: flex;
      align-items: center;
      cursor: pointer;
      font-size: 14px;
      color: var(--el-text-color-regular);
    }
  }
</style>
