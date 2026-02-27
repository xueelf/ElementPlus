export function useStorage<T = string>(key: string) {
  return {
    get(): T | null {
      const value = localStorage.getItem(key);

      if (value === null) {
        return null;
      }
      try {
        return JSON.parse(value);
      } catch {
        return <T>value;
      }
    },

    set(value: T): void {
      const raw = typeof value === 'string' ? value : JSON.stringify(value);
      localStorage.setItem(key, raw);
    },

    remove(): void {
      localStorage.removeItem(key);
    },
  };
}
