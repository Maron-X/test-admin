<template>
  <div class="">
    <div class="mb-3 mx-4 relative">
      <label
        for="name"
        class="block mb-2 text-sm font-medium dark:text-blue-400"
        >{{ label }}</label
      >
      <input
        type="name"
        id="name"
        class="
        input
        input-bordered
          text-sm
          rounded-lg
          focus:ring-blue-500 focus:border-blue-500
          block
          w-full
          p-2.5
          dark:text-white
        "
        placeholder="PersonX"
        v-model="inputValue"
      />
      <a
        v-if="isLink"
        class="absolute right-3 "
        :href="inputValue"
        target="_blank"
        style="top: 38px"
        title="Open link"
      >
        <i
          class="fa-solid fa-square-arrow-up-right"
          style="font-size: 22px"
        ></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    storeKey: {
      Type: String,
    },
    label: {
      Type: String,
    },
    
    isLink: {
      Type: Boolean,
      default: false,
    },
  },
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