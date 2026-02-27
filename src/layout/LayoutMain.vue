<script setup lang="ts">
  import { useKeepAlive } from '@/hooks/useKeepAlive';

  const { isNested, keepAliveState, generateComponentInstance } = useKeepAlive();
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Component v-if="isNested" :is="Component" />
    <KeepAlive v-else :include="keepAliveState.components">
      <Component :is="generateComponentInstance(Component)" />
    </KeepAlive>
  </RouterView>
</template>

<style scoped lang="scss"></style>
