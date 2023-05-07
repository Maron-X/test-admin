<template>
  <PageLayout>
    <template #title>Resume</template>

    <template #content>
      <SubTitle text="Education" buttonText="Add" @click="addNewEducation" />
      <EducationInputs
        v-for="(education, index) in $store.getters['educationGetter']"
        :key="'ed' + index"
        :index="index"
        :education="education"
        @updateEducation="updateEducation"
        @removeEducation="showEducationDeleteConfirm"
      />
      <DeleteConfirm
        :index="indexEducationToDelete"
        :showModal="showEducationDeleteModal"
        @delete="removeEducation"
        @cancel="closeDeleteConfirm"
      />
      <NoDataFound
        v-if="!$store.getters['educationGetter'].length"
        type="education"
      />

      <SubTitle text="Experience" buttonText="Add" @click="addNewExperience" />

      <ExperienceInputs
        v-for="(experience, index) in $store.getters['experienceGetter']"
        :key="'ex' + index"
        :index="index"
        :experience="experience"
        @updateExperience="updateExperience"
        @removeExperience="showExperienceDeleteConfirm"
      />
      <DeleteConfirm
        :index="indexExperienceToDelete"
        :showModal="showExperienceDeleteModal"
        @delete="removeExperience"
        @cancel="closeDeleteConfirm"
      />
      <NoDataFound
        v-if="!$store.getters['experienceGetter'].length"
        type="experiences"
      />

      <SubTitle text="Skills" buttonText="Add" @click="addNewSkills" />

      <SkillsInputs
        v-for="(skill, index) in $store.getters['skillsGetter']"
        :key="'sk' + index"
        :index="index"
        :skill="skill"
        @updateSkills="updateSkills"
        @removeSkills="showSkillsDeleteConfirm"
      />
      <DeleteConfirm
        :index="indexSkillsToDelete"
        :showModal="showSkillsDeleteModal"
        @delete="removeSkills"
        @cancel="closeDeleteConfirm"
      />
      <NoDataFound
        v-if="!$store.getters['skillsGetter'].length"
        type="skills"
      />

      <SubTitle text="Knowlege" buttonText="Add" @click="addNewKnowlege" />

      <KnowlegeInputs
        v-for="(knowlege, index) in $store.getters['knowlegesGetter']"
        :key="'kn' + index"
        :index="index"
        :knowlege="knowlege"
        @updateKnowleges="updateKnowleges"
        @removeKnowleges="showKnowlegesDeleteConfirm"
      />
      <DeleteConfirm
        :index="indexKnowlegesToDelete"
        :showModal="showKnowlegesDeleteModal"
        @delete="removeKnowleges"
        @cancel="closeDeleteConfirm"
      />
      <NoDataFound
        v-if="!$store.getters['knowlegesGetter'].length"
        type="knowleges"
      />

      <ActionButton
        label="Save"
        @click="
          $store.dispatch(
            'updateFirebase',
            'education-experience-skills-knowleges'
          )
        "
      />
    </template>
  </PageLayout>
</template>
<script>
export default {
  layout: "panel",

  beforeMount() {
    this.$store.dispatch("fetchFromCollection", {
      name: "education",
      setter: "updateEducation",
    });

    this.$store.dispatch("fetchFromCollection", {
      name: "experience",
      setter: "updateExperience",
    });

    this.$store.dispatch("fetchFromCollection", {
      name: "skills",
      setter: "updateSkills",
    });

    this.$store.dispatch("fetchFromCollection", {
      name: "knowleges",
      setter: "updateKnowleges",
    });

    this.$store.dispatch("fetchFromCollection", {
      name: "skillColors",
      setter: "updateSkillColors",
    });
  },
  
  mounted(){
    this.$store.dispatch("loadSubdomainData");

  },
  asyncData({ $fire, redirect }) {
    if (!$fire.auth.currentUser) {
      console.log("logenIn already");
      //  login page
      redirect("/");
    }
  },

  data() {
    return {
      emptyEducation: {
        year: "",
        school: "",
        degree: "",
      },
      emptyExperience: {
        year: "",
        title: "",
        company: "",
      },
      emptySkills: {
        title: "",
        percentage: "",
      },
      emptyKnowlege: {
        title: "",
      },
      showEducationDeleteModal: false,
      showExperienceDeleteModal: false,
      showSkillsDeleteModal: false,
      showKnowlegesDeleteModal: false,

      indexEducationToDelete: 0,
      indexExperienceToDelete: 0,
      indexSkillsToDelete: 0,
      indexKnowlegesToDelete: 0,
    };
  },
  methods: {
    //  education
    addNewEducation() {
      if (this.lastStoreElementFilled("education")) {
        this.addNewElementToStore("education");
      }
    },
    updateEducation({ index, education }) {
      this.updateType({ index, array: education }, "education");
    },

    removeEducation(index) {
      this.removeTypeIndex(index, "education");
    },

    //  experience
    addNewExperience() {
      if (this.lastStoreElementFilled("experience")) {
        this.addNewElementToStore("experience");
      }
    },
    updateExperience({ index, experience }) {
      this.updateType({ index, array: experience }, "experience");
    },

    removeExperience(index) {
      this.removeTypeIndex(index, "experience");
    },

    //  skills
    addNewSkills() {
      if (this.lastStoreElementFilled("skills")) {
        this.addNewElementToStore("skills");
      }
    },
    updateSkills({ index, skills }) {
      this.updateType({ index, array: skills }, "skills");
    },

    removeSkills(index) {
      this.removeTypeIndex(index, "skills");
    },

    //  knowleges
    addNewKnowlege() {
      if (this.lastStoreElementFilled("knowleges")) {
        this.addNewElementToStore("knowleges");
      }
    },
    updateKnowleges({ index, knowlege }) {
      this.updateType({ index, array: knowlege }, "knowleges");
    },

    removeKnowleges(index) {
      this.removeTypeIndex(index, "knowleges");
    },

    removeTypeIndex(index, type) {
      let updatedArray = this.cloneStoreArray(type);
      updatedArray = updatedArray.filter((x, i) => i != index);
      console.log("index: ", index);
      let formattedType = this.capitalizeFirstLetter(type);
      this.$store.dispatch(`update${formattedType}`, updatedArray);

      this.closeDeleteConfirm()
    },

    updateType({ index, array }, type) {
      let updatedArray = this.cloneStoreArray(type);

      updatedArray[index] = { ...array };
      let formattedType = this.capitalizeFirstLetter(type);
      this.$store.dispatch(`update${formattedType}`, updatedArray);
    },

    lastStoreElementFilled(type) {
      let storedArray = this.$store.getters[`${type}Getter`];

      console.log("storedArray: ", storedArray);
      let lastArrayElement = { ...storedArray[storedArray.length - 1] };

      if (Object.keys(lastArrayElement).length) {
        lastArrayElement;
        for (
          let index = 0;
          index < Object.values(lastArrayElement).length;
          index++
        ) {
          const element = Object.values(lastArrayElement)[index];

          console.log("element: ", element);
          if (!element) return false;
        }
      }

      return true;
    },
    addNewElementToStore(type) {
      const formattedType = this.capitalizeFirstLetter(type);

      this.$store.dispatch(`update${formattedType}`, [
        ...this.$store.getters[`${type}Getter`],
        this.getEmptyObject(type),
      ]);
    },
    getEmptyObject(type) {
      switch (type) {
        case "education":
          return this.emptyEducation;
          break;
        case "experience":
          return this.emptyExperience;
          break;
        case "skills":
          return this.emptySkills;
          break;
        case "knowleges":
          return this.emptyKnowlege;
          break;

        default:
          break;
      }
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    cloneStoreArray(type) {
      let storedType = this.$store.getters[`${type}Getter`];

      let updatedType = [];
      for (let i = 0; i < storedType.length; i++) {
        updatedType[i] = storedType[i];
      }
      return updatedType;
    },

    showEducationDeleteConfirm(index) {
      this.indexEducationToDelete = index;
      this.showEducationDeleteModal = true;
    },

    showExperienceDeleteConfirm(index) {
      this.indexExperienceToDelete = index;
      this.showExperienceDeleteModal = true;
    },

    showSkillsDeleteConfirm(index) {
      this.indexSkillsToDelete = index;
      this.showSkillsDeleteModal = true;
    },

    showKnowlegesDeleteConfirm(index) {
      this.indexKnowlegesToDelete = index;
      this.showKnowlegesDeleteModal = true;
    },

    closeDeleteConfirm() {
      this.showEducationDeleteModal = false;
      this.showExperienceDeleteModal = false;
      this.showSkillsDeleteModal = false;
      this.showKnowlegesDeleteModal = false;
    },
  },
};
</script>