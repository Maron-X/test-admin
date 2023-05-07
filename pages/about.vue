<template>
  <PageLayout>
    <template #title>Introduce yourself!</template>
    <template #content>
      <div class="w-full text-center my-4">
        <img
          :src="$store.getters['logoGetter']"
          alt=""
          class="avatar w-60 h-60 mb-2 mx-auto cursor-pointer"
          @click="chooseFile"
          style="object-fit: contain"
        />
        <input
          class="absolute top-0 left-0 z-0 opacity-0"
          type="file"
          name=""
          id=""
          accept="image/png, image/gif, image/jpeg"
          @change="updateFile($event, 'logo')"
        />
      </div>

      <SubTitle text="About" />
      <FormArea class="w-full" label="About Me" storeKey="aboutMe" />
      <FormArea class="w-full" label="My Goal" storeKey="aim" />
      <div class="w-4/5">
        <FormInput
          class="w-full"
          label="CV link"
          storeKey="CV"
          :isLink="true"
        />
      </div>
      <div class="w-1/5">
        <button type="button" class="btn mt-6 btn-accent" @click="chooseFile">
          <i class="fa-solid fa-paperclip lg:mr-2"></i>
          <span class="hidden lg:block"> Change </span>
        </button>
        <input
          class="absolute top-0 left-0 z-0 opacity-0"
          type="file"
          name=""
          id=""
          accept="application/pdf"
          @change="updateFile($event, 'CV')"
        />
      </div>

      <ActionButton
        label="Save"
        @click="$store.dispatch('updateFirebase', 'about')"
      />
    </template>
  </PageLayout>
</template>

<script>
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
export default {
  layout: "panel",

  asyncData({ $fire, redirect }) {
    if (!$fire.auth.currentUser) {
      console.log("logenIn already");
      //  login page
      redirect("/");
    }
  },
  mounted(){
    this.$store.dispatch("loadSubdomainData");

  },
  methods: {
    chooseFile($event) {
      $event.target.nextElementSibling.click();
    },
    updateFile($event, type) {
      if (!$event.target.files.length) return;

      let selectedFile = $event.target.files[0];
      const storage = getStorage();
      const storageRef = ref(storage, type); // name of the uploaded image , logo / CV
      uploadBytes(storageRef, selectedFile).then((snapshot) => {
        getDownloadURL(storageRef).then((url) => {
          this.$store.commit(`${type}Setter`, url);
        });
      });
    },
  },
};
</script>