<template>
  <div class="top-parent h-screen">
    <div
      id="appContainer"
      class="mx-auto px-0 h-screen margin-for-navbar flex justify-start"
    >
      <Navbar ref="navbar" />
      <div class="mx-auto w-full content-parent mt-6">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async beforeMount() {
    this.$store.dispatch("loadSubdomainData");
    // const docsRef = await this.$fire.firestore.collection("data").get();

    // const storedData = docsRef.docs.map((doc) => ({
    //   ...doc.data(),
    //   id: doc.id,
    // }));

    // this.$store.dispatch("updateData", storedData[0]);
  },
  mounted() {
    // this.$store.dispatch("loadSubdomainData");
  },
  
  watch: {
    $route() {
      this.$refs["navbar"].closeMobileMenu();
    },
  },
};
</script>
<style>
#appContainer,
top-parent {
  overflow: hidden;
}
.content-parent {
  overflow-x: hidden;
}

.margin-for-large-navbar {
  margin-left: 240px;
}
.margin-for-small-navbar {
  margin-left: 128px;
}

/* scrollbar */

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  @apply bg-primary-content;
}

/* Handle */
::-webkit-scrollbar-thumb {
  @apply bg-primary;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: bg-primay-focus;
}
</style>
