<template>
  <div class="">
    <p class="text-5xl">{{ text }}</p>

    <!-- <p class="text-3xl" v-show="!iconOnly">PERSONX</p> -->
  </div>
</template>

<script>
export default {
  props: ["iconOnly"],
  computed: {
    text() {
     return this.iconOnly ? "PX" : "PersonX";
    },
  },
};
</script>

<style>
</style>