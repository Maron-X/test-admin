<template>
  <PageLayout>
    <template #title>Personal info</template>
    <template #content>
      <div class="w-full text-center my-4">
        <img
          :src="$store.getters['avatarGetter']"
          alt=""
          class="avatar w-60 h-60 mb-2 mx-auto cursor-pointer"
          @click="chooseImage"
        />
        <input
          class="absolute top-0 left-0 z-0 opacity-0"
          type="file"
          name=""
          id=""
          @change="updateImage"
          accept="image/png, image/gif, image/jpeg"
        />
      </div>
      <FormInput class="w-full md:w-1/2" label="Name" storeKey="name" />
      <FormInput class="w-full md:w-1/2" label="Job Title" storeKey="job" />

      <FormInput class="w-full md:w-1/2" label="Phone" storeKey="phone" />
      <FormInput class="w-full md:w-1/2" label="email" storeKey="email" />
      <FormInput class="w-full md:w-1/2" label="location" storeKey="location" />
      <FormInput class="w-full md:w-1/2" label="birthday" storeKey="birthday" />

      <ActionButton
        label="Save"
        @click="$store.dispatch('updateFirebase', 'dashboard')"
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
  mounted() {
    this.$store.dispatch("loadSubdomainData");
  },
  data() {
    return {
      handledClientUsername: "test",
    };
  },
  methods: {
    chooseImage($event) {
      $event.target.nextElementSibling.click();
    },
    updateImage($event) {
      if (!$event.target.files.length) return;

      let selectedImage = $event.target.files[0];
      const storage = getStorage();
      const storageRef = ref(storage, "avatar"); // name of the uploaded image
      uploadBytes(storageRef, selectedImage).then((snapshot) => {
        getDownloadURL(storageRef).then((url) => {
          this.$store.commit("avatarSetter", url);
        });
      });
    },

  },
};
</script>