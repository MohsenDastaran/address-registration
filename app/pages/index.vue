<template>
  <div class="flex flex-col justify-center">
    <h2 class="mx-auto my-2 w-11/12 text-xl md:w-6/12">ثبت آدرس</h2>
    <UiContainer class="rounded bg-white py-5">
      <!-- <div class="flex w-full max-w-lg flex-col"> -->
      <p>لطفا مشخصات و آدرس خود را وارد کنید</p>
      <form @submit="onSubmit" class="my-4 flex w-full flex-col flex-wrap md:flex-row">
        <Field name="firstName" v-slot="{ componentField }">
          <UiFormItem class="mb-5 w-full md:w-4/12" label="نام">
            <UiInput class="" v-bind="componentField" placeholder="مثال:‌ محمد" />
          </UiFormItem>
        </Field>
        <Field name="lastName" v-slot="{ componentField }">
          <UiFormItem class="mb-5 w-full md:w-4/12" label="نام خانوادگی">
            <UiInput class="" v-bind="componentField" placeholder="مثال:‌ رضایی" />
          </UiFormItem>
        </Field>
        <Field name="cellPhone" v-slot="{ componentField }">
          <UiFormItem class="mb-5 w-full md:w-4/12" label="شماره تلفن همراه">
            <UiInput class="" v-bind="componentField" placeholder="مثال: ۰۹۱۲۱۲۳۴۵۶۸۷" />
          </UiFormItem>
        </Field>
        <Field name="phone" v-slot="{ componentField }">
          <UiFormItem
            class="mb-5 w-full md:w-4/12"
            label="شماره تلفن ثابت (اختیاری)"
            hint="*با پیش‌شماره"
          >
            <UiInput class="" v-bind="componentField" placeholder="مثال: ۰۲۱۴۴۲۵۶۷۸۰" />
          </UiFormItem>
        </Field>
        <Field name="address" v-slot="{ componentField }">
          <UiFormItem class="mb-5 w-full md:w-8/12" label="آدرس">
            <UiInput class="" v-bind="componentField" />
          </UiFormItem>
        </Field>
        <div class="fixed bottom-0 right-0 w-full">
          <UiContainer class="rounded bg-white py-5">
            <UiButton class="bg-achareh w-full" type="submit">ثبت و ادامه</UiButton>
          </UiContainer>
        </div>
      </form>
      <!-- </div> -->
    </UiContainer>
  </div>
</template>

<style src="../assets/css/styles.css"></style>

<script lang="ts" setup>
  import { z } from "zod";

  const { handleSubmit } = useForm({
    validationSchema: toTypedSchema(
      z.object({
        firstName: z
          .string({
            required_error: "پر کردن این فیلد الزامی است",
          })
          .min(3, "نام باید دارای ۳ کرکتر باشد"),
        lastName: z
          .string({
            required_error: "پر کردن این فیلد الزامی است",
          })
          .min(3, "نام خانوادگی باید دارای ۳ کرکتر باشد"),
        cellPhone: z
          .string({
            required_error: "پر کردن این فیلد الزامی است",
          })
          .min(3, "شماره تلفن همراه باید دارای ۳ کرکتر باشد"),
        phone: z.string().optional(),
        address: z
          .string({
            required_error: "پر کردن این فیلد الزامی است",
          })
          .min(3, "آدرس باید دارای ۳ کرکتر باشد"),
      })
    ),
  });

  const onSubmit = handleSubmit((values) => {
    alert(JSON.stringify(values, null, 2));
  });
</script>
<style scoped></style>
