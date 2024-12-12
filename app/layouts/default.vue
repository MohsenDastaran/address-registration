<template>
  <div>
    <UiNavbar sticky>
      <UiContainer class="flex h-14 items-center justify-between">
        <NuxtLink class="text-lg" to="/">
          <img style="scale: 0.9" src="@/assets/achare.png" alt="Achareh" />
        </NuxtLink>
        <div>
          <NuxtLink class="me-2" to="/">ثبت آدرس </NuxtLink>
          <NuxtLink class="text-achareh" to="/registered">مشاهده آدرس‌ها </NuxtLink>
        </div>
      </UiContainer>
    </UiNavbar>
    <slot />
  </div>
</template>

<script lang="ts" setup>
  const colorMode = useColorMode();
  // const setTheme = (val: string) => {
  colorMode.preference = "light";
  // };
  //
</script>
