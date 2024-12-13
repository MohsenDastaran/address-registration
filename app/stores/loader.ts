export const useUserStore = defineStore("loader", () => {
  const isLoading = ref(false);

  const setIsLoading = (bool: boolean) => (isLoading.value = bool);
  return { isLoading, setIsLoading };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
