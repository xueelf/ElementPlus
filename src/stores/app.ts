import { defineStore } from 'pinia';
import { useStorage } from '@/hooks/useStorage';

function generateMD5(): string {
  const bytes = new Uint8Array(16);

  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
}

const tokenStorage = useStorage('token');

export const useAppStore = defineStore('app', () => {
  const token = ref<string | null>(tokenStorage.get());
  const title = ref(import.meta.env.VITE_APP_TITLE ?? 'Untitled');

  const isLoggedIn = computed(() => !!token.value);

  function setToken() {
    const value = generateMD5();

    token.value = value;
    tokenStorage.set(value);
  }

  function clearToken() {
    token.value = null;
    tokenStorage.remove();
  }

  return { token, title, isLoggedIn, setToken, clearToken };
});
