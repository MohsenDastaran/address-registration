<template>
  <div class="container">
    <h2 class="title">آدرس ها و مشخصات</h2>
    <div class="card-list">
      <AddressCard
        v-for="item in addresses"
        :key="item.id"
        :name="item.first_name"
        :lastName="item.last_name"
        :gender="item.gender"
        :mobile="item.coordinate_mobile"
        :phone="item.coordinate_phone_number"
        :address="item.address"
      />
    </div>
  </div>
</template>

<script setup>
  const addresses = ref([]);

  api
    .get("address")
    .then((res) => (addresses.value = res))
    .catch(() => {
      push.error({
        title: "خطا",
        message: "خطایی رخ داده است",
      });
    });
</script>

<style scoped>
  .container {
    padding: 20px;
    max-width: 900px;
    margin: 0 auto;
  }

  .title {
    font-size: 1.5rem;
    margin-bottom: 20px;
    text-align: right;
    color: #333;
  }

  .card-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>
