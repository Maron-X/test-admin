<template>
  <div class="w-full flex flex-wrap pb-2 border-b border-gray-400 mb-3 relative">
    <RemoveButton
      class="absolute right-2 -top-2"
      @click="$emit('removeEducation', index)"
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
          mr-3
        "
        placeholder="PersonX"
        :value="education.year"
        @change="updateYear($event)"
      />
    </div>

    <div class="mb-3 w-full md:w-1/2 md:pr-4">
      <label
        for="name"
        class="block mb-2 text-sm font-medium "
        >Degree</label
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
        :value="education.degree"
        @change="updateDegree($event)"
      />
    </div>

    <div class="mb-3 w-full">
      <label
        for="name"
        class="block mb-2 text-sm font-medium "
        >School</label
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
        @change="updateSchool($event)"
        :value="education.school"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["index", "education"],
  data() {
    return {
      editIcon: false,
      year: "",
      school: "",
      degree: "",
    };
  },
  mounted() {
    setTimeout(() => {
      this.updateLocalData();
    }, 1000);
  },
  methods: {
    updateLocalData() {
      this.year = this.education.year;
      this.school = this.education.school;
      this.degree = this.education.degree;
    },
    updateYear(event) {
      this.year = event.target.value;
      this.updateEducation();
    },
    updateDegree(event) {
      this.degree = event.target.value;
      this.updateEducation();
    },
    updateSchool(event) {
      this.school = event.target.value;
      this.updateEducation();
    },
    updateEducation() {
      let updatedEducation = {
        year: this.year,
        degree: this.degree,
        school: this.school,
        id: this.education.id,

      };

      this.$emit("updateEducation", {
        index: this.index,
        education: updatedEducation,
      });
    },
  },
};
</script>

<style>
</style>