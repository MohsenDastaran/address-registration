<template>
  <ConfigProvider :use-id="useIdFunction">
    <LoadingOverlay :isLoading="loaderStore.isLoading" />
    <div>
      <NuxtLoadingIndicator />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <!-- Delete the toast that you don't need -->
      <UiVueSonner />
      <UiNotivue />
    </div>
  </ConfigProvider>
</template>

<script setup lang="ts">
  import { useUserStore } from "@/stores/loader";
  import { ConfigProvider } from "radix-vue";

  const loaderStore = useUserStore();

  const useIdFunction = () => useId()!;
</script>
