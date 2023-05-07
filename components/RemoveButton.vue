<template>
  <div class="" @click="$emit('click')">
    <div
      title="Remove this item"
      class="
        button
        rounded-full
        w-8
        h-8
        bg-error
        cursor-pointer
        flex
        justify-center
        items-center
      "
    >
      <i class="fa-solid fa-trash" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>