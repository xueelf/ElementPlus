<script setup lang="ts">
  import config from '@/config/element';
  import LayoutContainer from '@/layout/LayoutContainer.vue';
</script>

<template>
  <ElConfigProvider v-bind="config">
    <RouterView v-if="$route.meta.noLayout" />
    <LayoutContainer v-else />
  </ElConfigProvider>
</template>

<style scoped lang="scss"></style>
