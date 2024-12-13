<template>
  <div v-if="isLoading" class="loading-overlay">
    <ThreeDotsLoader />
  </div>
</template>

<script setup>
  defineProps({
    isLoading: {
      type: Boolean,
      required: true,
    },
  });
</script>

<style scoped>
  .loading-overlay {
    @apply fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50;
  }
</style>
