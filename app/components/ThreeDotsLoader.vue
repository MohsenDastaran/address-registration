<template>
  <div class="dots-loader">
    <div class="dot" :class="{ '!bg-white': isWhite }"></div>
    <div class="dot" :class="{ '!bg-white': isWhite }"></div>
    <div class="dot" :class="{ '!bg-white': isWhite }"></div>
  </div>
</template>
<script setup>
  defineProps({
    isWhite: {
      type: Boolean,
    },
  });
</script>
<style scoped>
  /* Loader container */
  .dots-loader {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  /* Individual dots */
  .dot {
    width: 12px;
    height: 12px;
    background-color: var(--achareh);
    border-radius: 50%;
    animation: dots-bounce 1.2s infinite ease-in-out;
  }

  /* Dots animation */
  .dot:nth-child(2) {
    animation-delay: 0.2s;
  }

  .dot:nth-child(3) {
    animation-delay: 0.4s;
  }

  /* Bounce animation */
  @keyframes dots-bounce {
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
</style>
