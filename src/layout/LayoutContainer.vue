<script setup lang="ts">
  import LayoutAside from './LayoutAside.vue';
  import LayoutHeader from './LayoutHeader.vue';
  import LayoutMain from './LayoutMain.vue';
</script>

<template>
  <ElContainer class="layout-container">
    <ElHeader>
      <LayoutHeader />
    </ElHeader>
    <ElContainer>
      <ElAside>
        <LayoutAside />
      </ElAside>
      <ElContainer>
        <ElMain>
          <LayoutMain />
        </ElMain>
      </ElContainer>
    </ElContainer>
  </ElContainer>
</template>

<style scoped lang="scss">
  .layout-container {
    height: 100vh;

    > .el-header {
      background-color: var(--el-bg-color);
      border-bottom: 1px solid var(--el-border-color-light);
      padding: 0;
    }

    > .el-container {
      overflow: hidden;

      .el-aside {
        width: var(--layout-aside-width, 220px);
        background-color: var(--el-bg-color);
        overflow-y: auto;
      }

      .el-main {
        background-color: var(--el-bg-color-page);
        overflow-y: auto;
      }
    }
  }
</style>
