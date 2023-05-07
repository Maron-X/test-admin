
<template>
  <PageLayout>
    <template #title>What I do!</template>
    <template #content>
      <SubTitle text="Services" buttonText="Add" @click="addNewService" />

      <ServiceInputs
        v-for="(service, index) in $store.getters['servicesGetter']"
        :key="index"
        :index="index"
        :service="service"
        @updateService="updateService"
        @removeService="showDeleteConfirm"
      />
      <DeleteConfirm
        :index="indexToRemove"
        :showModal="showDeleteModal"
        @delete="removeService"
        @cancel="closeDeleteConfirm"
      />
      <NoDataFound
        v-if="!$store.getters['servicesGetter'].length"
        type="services"
      />

      <ActionButton
        label="Save"
        @click="$store.dispatch('updateFirebase', 'services')"
      />
    </template>
  </PageLayout>
</template>
<script>
export default {
  beforeMount() {
    this.$store.dispatch("fetchFromCollection", {
      name: "services",
      setter: "updateServices",
    });
  },
  async mounted() {
    
    this.$store.dispatch("loadSubdomainData");
  
    console.log('MIXINS : ', this.subdomain)
    // update a service example
    const docsRef = await this.$fire.firestore
      .collection("clients")
      .doc(this.subdomain)
      .collection("services")
      .get();
    const fetchedData = docsRef.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log("fetchedData: ", fetchedData);

    // update store services data
    this.$store.dispatch('updateServices', fetchedData)

  },
  layout: "panel",
  data() {
    return {
      services: [],
      showDeleteModal: false,
      indexToRemove: null,
    };
  },
  methods: {
    addNewService() {
      console.log("add New Service");
      let storedServices = this.$store.getters["servicesGetter"];
      let lastService = { ...storedServices[storedServices.length - 1] };
      console.log("lastService: ", lastService);
      if (
        Object.values(lastService).length &&
        (!lastService.title || !lastService.description)
      )
        return;

      this.$store.dispatch("updateServices", [
        ...this.$store.getters["servicesGetter"],
        {
          title: "",
          icon: "",
          description: "",
        },
      ]);
    },
    cloneStoreArray() {
      let storedServices = this.$store.getters["servicesGetter"];
      let updatedServices = [];
      for (let i = 0; i < storedServices.length; i++) {
        updatedServices[i] = storedServices[i];
      }
      return updatedServices;
    },
    updateService({ index, service }) {
      let updatedServices = this.cloneStoreArray();
      updatedServices[index] = { ...service };
      this.$store.dispatch("updateServices", updatedServices);
    },
    removeService(index) {
      let updatedServices = this.cloneStoreArray();
      // get item id
      let id = updatedServices.find((x, i) => i == index).id || null;
      console.log("id: ", id);
      updatedServices = updatedServices.filter((x, i) => i != index);
      this.$store.dispatch("updateServices", updatedServices);
      this.closeDeleteConfirm();
      if (id) {
        // delete in db
        this.$fire.firestore.collection('clients').doc(this.subdomain).collection("services").doc(id).delete();
      }
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