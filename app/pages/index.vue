<template>
  <div class="flex flex-col justify-center">
    <h2 class="mx-auto my-2 w-11/12 text-xl md:w-6/12">ثبت آدرس</h2>
    <UiContainer class="rounded bg-white py-5">
      <!-- <div class="flex w-full max-w-lg flex-col"> -->
      <section v-if="stepper === 0">
        <p>لطفا مشخصات و آدرس خود را وارد کنید</p>
        <form @submit="onFormSubmit" class="my-4 flex w-full flex-col flex-wrap md:flex-row">
          <Field name="first_name" v-slot="{ componentField }">
            <UiFormItem class="mb-5 w-full md:w-4/12" label="نام">
              <UiInput class="" v-bind="componentField" placeholder="مثال:‌ محمد" />
            </UiFormItem>
          </Field>
          <Field name="last_name" v-slot="{ componentField }">
            <UiFormItem class="mb-5 w-full md:w-4/12" label="نام خانوادگی">
              <UiInput class="" v-bind="componentField" placeholder="مثال:‌ رضایی" />
            </UiFormItem>
          </Field>
          <Field name="coordinate_mobile" v-slot="{ componentField }">
            <UiFormItem class="mb-5 w-full md:w-4/12" label="شماره تلفن همراه">
              <UiInput class="" v-bind="componentField" placeholder="مثال: ۰۹۱۲۱۲۳۴۵۶۸۷" />
            </UiFormItem>
          </Field>
          <Field name="coordinate_phone_number" v-slot="{ componentField }">
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
          <Field name="gender" v-slot="{ componentField }">
            <UiFormItem label="جنسیت" class="flex">
              <!-- <p class="font-medium"></p> -->
              <UiRadioGroup v-bind="componentField" class="flex">
                <UiFormItem
                  hideMessage
                  class="flex flex-row-reverse items-center justify-center gap-3 space-y-0"
                  label="خانم"
                >
                  <UiRadioGroupItem value="female" />
                </UiFormItem>
                <UiFormItem
                  hideMessage
                  class="flex flex-row-reverse items-center justify-center gap-3 space-y-0"
                  label="آقا"
                >
                  <UiRadioGroupItem value="male" />
                </UiFormItem>
              </UiRadioGroup>
            </UiFormItem>
          </Field>
          <div class="fixed bottom-0 right-0 w-full">
            <UiContainer class="rounded bg-white py-5">
              <UiButton class="bg-achareh w-full" type="submit">ثبت و ادامه</UiButton>
            </UiContainer>
          </div>
        </form>
      </section>

      <!-- </div> -->
      <section v-if="stepper === 1" class="relative">
        <div class="absolute right-0 top-0 z-10 w-full opacity-80">
          <UiContainer class="rounded bg-white py-5">
            <div class="flex gap-2">
              <img
                @click="stepper--"
                class="cursor-pointer"
                src="@/assets/arrow.png"
                style="height: 20px; width: 24px"
                alt="Arrow"
              />
              <p class="hidden md:flex">موقعیت مورد نظر خود را روی نقشه مشخص کنید</p>

              <p class="flex md:hidden">انتخاب موقعیت</p>
            </div>
          </UiContainer>
        </div>
        <MapComponent @submit="onSubmit">
          <ThreeDotsLoader v-if="loader" isWhite />
          <p v-else>ثبت و ادامه</p>
        </MapComponent>
      </section>
      <SuccessPage v-if="stepper === 2" />
    </UiContainer>
  </div>
</template>

<style src="../assets/css/styles.css"></style>

<script lang="ts" setup>
  import { z } from "zod";

  const loader = ref(false);

  const formValues = ref({});
  const stepper = ref(0);
  const { handleSubmit } = useForm({
    validationSchema: toTypedSchema(
      z.object({
        first_name: z
          .string({
            required_error: "پر کردن این فیلد الزامی است",
          })
          .min(3, "نام باید دارای ۳ کرکتر باشد"),
        last_name: z
          .string({
            required_error: "پر کردن این فیلد الزامی است",
          })
          .min(3, "نام خانوادگی باید دارای ۳ کرکتر باشد"),
        coordinate_mobile: z
          .string({
            required_error: "پر کردن این فیلد الزامی است",
          })
          .min(3, "شماره تلفن همراه باید دارای ۳ کرکتر باشد")
          .regex(
            /(^09[0-9]{9}$)|(^\u06F0\u06F9[\u06F0-\u06F9]{9})$/,
            "شماره تلفن همراه نامعتبر است!"
          ),
        coordinate_phone_number: z.string().optional(),
        address: z
          .string({
            required_error: "پر کردن این فیلد الزامی است",
          })
          .min(3, "آدرس باید دارای ۳ کرکتر باشد"),
        gender: z.string().optional(),
      })
    ),
  });

  const onFormSubmit = handleSubmit((values) => {
    console.log(values);
    formValues.value = values;
    stepper.value++;
  });
  const onSubmit = (coords: number[]) => {
    const payload = {
      region: "1",
      lng: coords[0]?.toString(),
      lat: coords[1]?.toString(),
      ...formValues.value,
    };
    console.log(payload);
    loader.value = true;
    api
      .post("address", payload)
      .then(() => {
        stepper.value++;
        push.success({
          message: "مشخصات با موفقیت ثبت شد",
        });
      })
      .catch(() => {
        push.error({
          title: "خطا",
          message: "خطایی رخ داده است",
        });
      })
      .finally(() => (loader.value = false));
  };
</script>
