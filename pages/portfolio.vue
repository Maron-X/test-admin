<template>
  <PageLayout>
    <template #title>Show your best!</template>
    <template #content>
      <SubTitle text="Portfolio" buttonText="Add" @click="addNewWork" />
      <PortfolioInputs
        v-for="(work, index) in $store.getters['worksGetter']"
        :key="index"
        :index="index"
        :work="work"
        @updateWorks="updateWorks"
        @removeWorks="showDeleteConfirm"
      />
      <DeleteConfirm
        :index="indexToRemove"
        :showModal="showDeleteModal"
        @delete="removeWorks"
        @cancel="closeDeleteConfirm"
      />
      <NoDataFound
        v-if="!$store.getters['worksGetter'].length"
        type="portfolio items"
      />

      <ActionButton
        label="Save"
        @click="$store.dispatch('updateFirebase', 'works')"
      />
    </template>
  </PageLayout>
</template>

<script>
export default {
  layout: "panel",
  beforeMount() {
    this.$store.dispatch("fetchFromCollection", {
      name: "works",
      setter: "updateWorks",
    });
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
      showDeleteModal: false,
      indexToRemove: null,
    };
  },
  methods: {
    addNewWork() {
      console.log("add New Work");
      let storedWorks = this.$store.getters["worksGetter"];

      let lastWork = { ...storedWorks[storedWorks.length - 1] };

      console.log("lastWork: ", lastWork);
      if (
        Object.values(lastWork).length &&
        (!lastWork.title || !lastWork.description)
      )
        return;

      this.$store.dispatch("updateWorks", [
        ...this.$store.getters["worksGetter"],
        {
          category: "",
          client: "",
          cover: "",
          description: "",
          image: "",
          skills: "",
          title: "",
          url: "",
        },
      ]);
    },

    updateWorks({ index, works }) {
      let updatedWorks = this.cloneStoreArray();
      updatedWorks[index] = { ...works };
      console.log("updatedWorks from emit:", updatedWorks);
      this.$store.dispatch("updateWorks", updatedWorks);
    },

    removeWorks(index) {
      let updatedWorks = this.cloneStoreArray();
      let id = updatedWorks.find((x, i) => i == index).id || null;

      updatedWorks = updatedWorks.filter((x, i) => i != index);
      this.$store.dispatch("updateWorks", updatedWorks);

      this.closeDeleteConfirm();
      if (id) {
        // delete in db
        this.$fire.firestore.collection("works").doc(id).delete();

      }
    },
    cloneStoreArray() {
      let storedWorks = this.$store.getters["worksGetter"];

      console.log("storedWorks :", storedWorks);
      let updatedWorks = [];
      for (let i = 0; i < storedWorks.length; i++) {
        updatedWorks[i] = storedWorks[i];
      }
      return updatedWorks;
    },

    showDeleteConfirm(index) {
      this.indexToRemove = index;
      this.showDeleteModal = true;
    },
    closeDeleteConfirm() {
      this.showDeleteModal = false;
    },
  },
};
</script>