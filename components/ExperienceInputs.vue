<template>
  <div class="w-full flex flex-wrap pb-2 border-b border-gray-400 mb-3 relative">
    <RemoveButton
      class="absolute right-2 -top-2"
      @click="$emit('removeExperience', index)"
    />

    <div class="mb-3 w-full md:w-1/2 md:pr-4">
      <label
        for="name"
        class="block mb-2 text-sm font-medium "
        >Duration</label
      >
      <input
        type="name"
        id="name"
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
        :value="experience.year"
        @change="updateYear($event)"
      />
    </div>

    <div class="mb-3 w-full md:w-1/2">
      <label
        for="name"
        class="block mb-2 text-sm font-medium "
        >Company</label
      >
      <input
        type="name"
        id="name"
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
        :value="experience.company"
        @change="updateCompany($event)"
      />
    </div>

    <div class="mb-3 w-full">
      <label
        for="name"
        class="block mb-2 text-sm font-medium "
        >Job Title</label
      >

      <input
        type="name"
        id="name"
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
        @change="updateTitle($event)"
        :value="experience.title"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ["index", "experience"],
  data() {
    return {
      editIcon: false,
      year: "",
      title: "",
      company: "",
    };
  },
  mounted() {
    setTimeout(() => {
      this.updateLocalData();
    }, 1000);
  },
  methods: {
    updateLocalData() {
      this.year = this.experience.year;
      this.title = this.experience.title;
      this.company = this.experience.company;
    },
    updateYear(event) {
      this.year = event.target.value;
      this.updateExperience();
    },
    updateCompany(event) {
      this.company = event.target.value;
      this.updateExperience();
    },
    updateTitle(event) {
      this.title = event.target.value;
      this.updateExperience();
    },
    updateExperience() {
      let updatedExperience = {
        year: this.year,
        company: this.company,
        title: this.title,
        id: this.experience.id,

      };
      this.$emit("updateExperience", {
        index: this.index,
        experience: updatedExperience,
      });
    },
  },

};
</script>

<style>
</style>