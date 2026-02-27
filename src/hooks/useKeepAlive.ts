import type { Component, Ref } from 'vue';

interface CacheEntry {
  ref: Ref<Component>;
  wrapper: Component;
}

interface KeepAliveState {
  /** 组件缓存 `{ <路由名>: <缓存条目> }` */
  cache: Record<string, CacheEntry>;
  /** 需要缓存的路由名称列表 */
  components: string[];
}

export function useKeepAlive() {
  const route = useRoute();

  const isNested = computed(() => {
    return route.matched.filter(({ components }) => components?.default).length > 1;
  });

  const keepAliveState = reactive<KeepAliveState>({
    cache: markRaw({}),
    components: [],
  });

  function generateComponentInstance(component?: Component) {
    const { name } = route;

    if (!name || !component) {
      return;
    }

    const cached = Reflect.get(keepAliveState.cache, name);

    if (cached) {
      // 更新组件引用，确保 keep-alive 缓存的组件能获取最新的 route props
      Reflect.set(cached.ref, 'value', component);
      return cached.wrapper;
    }

    if (route.meta.keepAlive) {
      const ref = shallowRef(component);
      const wrapper = { name, render: () => h(ref.value) };

      Reflect.set(keepAliveState.cache, name, { ref, wrapper });
      keepAliveState.components.push(name as string);

      return wrapper;
    }

    return { name, render: () => h(component) };
  }

  function removeCachedView(name: string) {
    const index = keepAliveState.components.indexOf(name);
    if (index > -1) {
      keepAliveState.components.splice(index, 1);
    }
    Reflect.deleteProperty(keepAliveState.cache, name);
  }

  function clearCachedViews() {
    keepAliveState.components.length = 0;
    Object.keys(keepAliveState.cache).forEach((key) => {
      Reflect.deleteProperty(keepAliveState.cache, key);
    });
  }

  return {
    isNested,
    keepAliveState,
    generateComponentInstance,
    removeCachedView,
    clearCachedViews,
  };
}
