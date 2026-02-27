<script setup lang="ts"></script>

<template>
  <div class="layout-aside">
    <ElMenu class="h-full" router :default-active="$route.path">
      <ElMenuItem index="/home">
        <ElIcon>
          <IconEpHomeFilled />
        </ElIcon>
        <span>首页</span>
      </ElMenuItem>
      <ElSubMenu index="form">
        <template #title>
          <ElIcon>
            <IconEpEditPen />
          </ElIcon>
          <span>表单示例</span>
        </template>
        <ElMenuItem index="/form/cached">
          <span>缓存表单</span>
        </ElMenuItem>
        <ElMenuItem index="/form/no-cache">
          <span>非缓存表单</span>
        </ElMenuItem>
      </ElSubMenu>
      <ElMenuItem index="/about">
        <ElIcon>
          <IconEpInfoFilled />
        </ElIcon>
        <span>关于</span>
      </ElMenuItem>
    </ElMenu>
  </div>
</template>

<style scoped lang="scss">
  .layout-aside {
    height: 100%;
  }
</style>
