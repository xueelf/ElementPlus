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
    <div class="login__card">
      <div class="flex flex-col items-center mb-6">
        <img src="@/assets/logo.svg" alt="logo" class="w-12 h-12 mb-3" />
        <h2 class="text-xl font-semibold m-0">{{ appStore.title }}</h2>
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
    </div>
  </div>
</template>

<style scoped lang="scss">
  .login {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 24px;
    background-color: var(--el-bg-color);

    &__card {
      width: 100%;
      max-width: 380px;
    }

    @screen sm {
      background-color: var(--el-bg-color-page);

      .login__card {
        background-color: var(--el-bg-color);
        border-radius: 12px;
        box-shadow: var(--el-box-shadow-light);
        padding: 32px;
      }
    }
  }
</style>
