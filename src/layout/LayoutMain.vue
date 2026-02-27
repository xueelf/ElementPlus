<script setup lang="ts">
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Component :is="Component" />
  </RouterView>
</template>

<style scoped lang="scss"></style>
