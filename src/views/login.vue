<script setup lang="ts">
  import { useAppStore } from '@/stores/app';

  definePage({
    meta: {
      noLayout: true,
    },
  });

  const router = useRouter();
  const appStore = useAppStore();

  const form = reactive({
    username: '',
    password: '',
  });

  const loading = ref(false);

  function handleLogin() {
    if (!form.username || !form.password) {
      ElMessage.warning('请输入用户名和密码');
      return;
    }

    loading.value = true;

    // 模拟登录请求
    setTimeout(() => {
      appStore.setToken();
      ElMessage.success('登录成功');
      router.replace('/');
      loading.value = false;
    }, 500);
  }
</script>

<template>
  <div class="login">
    <ElCard class="login__card">
      <div class="login__header">
        <img src="@/assets/logo.svg" alt="logo" class="login__logo" />
        <h2 class="login__title">{{ appStore.title }}</h2>
      </div>
      <ElForm @submit.prevent="handleLogin">
        <ElFormItem>
          <ElInput v-model="form.username" placeholder="用户名" size="large">
            <template #prefix>
              <ElIcon><IconEpUser /></ElIcon>
            </template>
          </ElInput>
        </ElFormItem>
        <ElFormItem>
          <ElInput
            v-model="form.password"
            type="password"
            placeholder="密码"
            show-password
            size="large"
          >
            <template #prefix>
              <ElIcon><IconEpLock /></ElIcon>
            </template>
          </ElInput>
        </ElFormItem>
        <ElFormItem>
          <ElButton type="primary" size="large" :loading class="w-full" native-type="submit">
            登录
          </ElButton>
        </ElFormItem>
      </ElForm>
    </ElCard>
  </div>
</template>

<style scoped lang="scss">
  .login {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: var(--el-bg-color-page);

    &__card {
      width: 380px;
      border-radius: 12px;

      & .el-card__body {
        padding: 32px;
      }
    }

    &__header {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 24px;
    }

    &__logo {
      width: 48px;
      height: 48px;
      margin-bottom: 12px;
    }

    &__title {
      font-size: 20px;
      font-weight: 600;
      color: var(--el-text-color-primary);
      margin: 0;
    }
  }
</style>
