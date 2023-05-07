<template>
  <div class="w-full flex justify-center mr-2 my-4">
    <button class="btn btn-primary" @click="$emit('click')">
      <i class="fa-solid fa-save mr-2"></i>
      {{ label }}</button>
  </div>
</template>

<script>
export default {
    props: ['label']
};
</script>

<style>
</style>