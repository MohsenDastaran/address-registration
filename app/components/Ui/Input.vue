<template>
  <div class="relative">
    <!-- eslint-disable-next-line vue/html-self-closing -->
    <input v-bind="props" v-model="localModel" :class="styles({ class: props.class })" />
    <svg
      class="clear absolute hidden cursor-pointer"
      v-if="localModel"
      @click="localModel = ''"
      style="top: 12px; left: 15px"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_6073_721)">
        <circle cx="8" cy="8" r="8" fill="#B6B6B6" />
        <path
          d="M4.5354 11.2991L11.6065 4.43296"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.6065 11.2992L4.5354 4.43311"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_6073_721">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<script lang="ts" setup>
  const props = withDefaults(
    defineProps<{
      class?: any;
      id?: string;
      name?: string;
      placeholder?: string;
      disabled?: boolean;
      required?: boolean;
      type?: string;
      modelValue?: any;
    }>(),
    { type: "text" }
  );
  const emits = defineEmits<{
    "update:modelValue": [value: any];
  }>();
  const localModel = useVModel(props, "modelValue", emits);
  const styles = tv({
    base: "form-input h-10 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:px-1 file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground file:hover:cursor-pointer focus:border-input focus:ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:[color-scheme:dark] sm:text-sm",
  });
</script>
<style scoped>
  /* Show SVG when input is focused */
  input:focus + .clear {
    display: inline;
  }
  input {
    width: 98% !important;
  }
</style>
