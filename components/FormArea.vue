<template>
  <div class="">
    <div class="mb-3 mx-4">
      <label
        for="name"
        class="block mb-2 text-sm font-medium "
        >{{ label }}</label
      >
      <textarea
        rows="4"
        type="name"
        id="name"
        class="
        leading-loose
            text-sm
          rounded-lg
          textarea textarea-bordered
          block
          w-full
          p-2.5
        "
        placeholder="PersonX"
        v-model="inputValue"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["storeKey", "label"],

  computed: {
    inputValue: {
      get: function () {
        return this.$store.getters[`${this.storeKey}Getter`];
      },
      set: function (newValue) {
        this.$store.commit(`${this.storeKey}Setter`, newValue);
      },
    },
  },
};
</script>

<style>
</style>