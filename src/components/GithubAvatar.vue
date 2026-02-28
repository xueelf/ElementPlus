<script setup lang="ts">
  import type { AvatarProps } from 'element-plus';

  interface Props extends AvatarProps {
    id?: string;
  }

  const props = defineProps<Props>();
  const avatarSrc = computed(() => {
    if (props.id) {
      return `https://github.com/${props.id}.png`;
    }
    return props.src;
  });
  const profileUrl = computed(() => (props.id ? `https://github.com/${props.id}` : undefined));

  function handleClick() {
    if (!profileUrl.value) {
      return;
    }
    window.open(profileUrl.value, '_blank');
  }
</script>

<template>
  <ElAvatar
    v-bind="{ ...$attrs, ...props }"
    :src="avatarSrc"
    class="cursor-pointer"
    @click="handleClick"
  >
    <template v-for="(_, name) in $slots" :key="name" #[name]="scope">
      <slot :name="name" v-bind="scope ?? {}" />
    </template>
  </ElAvatar>
</template>
