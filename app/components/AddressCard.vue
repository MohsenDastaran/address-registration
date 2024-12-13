<template>
  <div class="card grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-y-8">
    <div class="card-item flex-row md:flex-col">
      <span class="label">نام</span>
      <span class="value">{{ name }}</span>
    </div>
    <div class="card-item flex-row md:flex-col">
      <span class="label">نام خانوادگی</span>
      <span class="value">{{ lastName }}</span>
    </div>
    <div class="card-item flex-row md:flex-col">
      <span class="label">جنسیت</span>
      <span class="value">{{ gender }}</span>
    </div>
    <div class="card-item flex-row md:flex-col">
      <span class="label">شماره تلفن همراه</span>
      <span class="value">{{ mobile }}</span>
    </div>
    <div class="card-item flex-row md:flex-col">
      <span class="label">شماره تلفن ثابت</span>
      <span class="value">{{ phone }}</span>
    </div>
    <UiGradientDivider class="my-2 md:hidden" />

    <div class="card-item flex-col">
      <span class="label">آدرس</span>
      <span class="value">{{ address }}</span>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    name: String,
    lastName: String,
    gender: String,
    mobile: String,
    phone: String,
    address: String,
  });
</script>

<style scoped>
  .card {
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .card-item {
    display: flex;
    justify-content: space-between;
  }

  .label {
    color: #888;
    margin-bottom: 4px;
  }

  .value {
    color: #333;
  }
</style>
