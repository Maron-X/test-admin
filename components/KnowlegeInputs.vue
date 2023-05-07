<template>
  <div class="w-full flex flex-wrap pb-2 border-b border-gray-400 mb-3 relative">
    <RemoveButton
      class="absolute right-2 -top-2"
      @click="$emit('removeKnowleges', index)"
    />

    <div class="mb-3 w-full">
      <label
        for="title"
        class="block mb-2 text-sm font-medium "
        >Title</label
      >
      <input
        type="title"
        id="title"
        class="
          
          
           text-sm
          rounded-lg
          input
        input-bordered
          block
          w-full
          p-2.5
        "
        placeholder="PersonX"
        :value="knowlege?.title"
        @change="updateTitle($event)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["index", "knowlege"],
  data() {
    return {
      editIcon: false,
      title: "",
    };
  },
  mounted() {
    setTimeout(() => {
      this.updateLocalData();
    }, 1000);
  },
  methods: {
    updateLocalData() {
      this.title = this.knowlege.title
    },  
    updateTitle(event) {
      this.title = event.target.value;
      this.updateKnowleges();
    },

    updateKnowleges() {
      let updatedKnowleges = {
        title: this.title,
        id: this.knowlege.id,

      };
      this.$emit("updateKnowleges", {
        index: this.index,
        knowlege: updatedKnowleges,
      });
    },
  },
};
</script>

<style>
</style>