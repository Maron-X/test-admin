<template>
  <div class="w-full absolute bottom-20 right-10 flex justify-center">
    <button
      class="mx-auto btn btn-sm btn-secondary rounded-full w-20 h-10"
      style="z-index: 999"
      @click="$emit('click')"
    >
      <span> <i class="fa-solid fa-plus" /> Add </span>
    </button>
  </div>
</template>

<script>
export default {
  props: ["text"],
};
</script>

<style>
</style>