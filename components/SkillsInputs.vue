<template>
  <div class="w-full flex flex-wrap pb-2 border-b border-gray-400 mb-3 relative">
    <RemoveButton
      class="absolute right-2 -top-2"
      @click="$emit('removeSkills', index)"
    />

    <div class="mb-3 w-full md:w-4/5 md:pr-4">
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
        :value="skill.title"
        @change="updateTitle($event)"
      />
    </div>

    <div class="mb-3 w-full md:w-1/5">
      <label
        for="title"
        class="block mb-2 text-sm font-medium "
        >Percentage</label
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
        :value="skill.percentage"
        @change="updatePercentage($event)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["index", "skill"],
  data() {
    return {
      editIcon: false,
      title: "",
      percentage: "",
    };
  },
  mounted() {
    setTimeout(() => {
      this.updateLocalData();
    }, 1000);
  },
  methods: {
    updateLocalData() {
      this.title = this.skill.title;
      this.percentage = this.skill.percentage;
    },
    updateTitle(event) {
      this.title = event.target.value;
      this.updateSkills();
    },
    updatePercentage(event) {
      this.percentage = event.target.value;
      this.updateSkills();
    },

    updateSkills() {
      let updatedSkills = {
        title: this.title,
        percentage: this.percentage,
        id: this.skill.id,

      };
      this.$emit("updateSkills", {
        index: this.index,
        skills: updatedSkills,
      });
    },
  },
};
</script>

<style>
</style>