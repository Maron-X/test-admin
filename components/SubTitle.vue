<template>
  <div class="mt-2 mb-4 w-full border-b border-gray-500 font-bold pb-2 flex justify-between">
    <h3 class="text-lg w-4/5">{{ text }}</h3>
    <button class="btn btn-sm rounded-full btn-accent" v-if="buttonText" @click="$emit('click')">
      <i class="fa-solid fa-plus mr-2"></i> {{ buttonText }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      Type: String,
      default: "",
    },
    buttonText: {
      Type: String,
      default: "",
    },
    
  },
};
</script>

<style>
</style>