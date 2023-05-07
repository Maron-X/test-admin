<template>
  <div class="w-full flex flex-wrap pb-2 border-b border-gray-400  mb-3 relative">
    <RemoveButton
      class="absolute right-0 lg:right-10"
      @click="$emit('removeService', index)"
    />

    <div class="flex md:w-1/2">
      <div class="mb-3 w-full">
        <label for="name" class="block mb-2 text-sm font-medium">Title </label>
        <input
          type="name"
          id="name"
          class="text-sm rounded-lg input input-bordered block w-full p-2.5"
          placeholder="PersonX"
          :value="service.title"
          @change="updateTitle($event)"
        />
      </div>

      <div class="mb-2 mx-4">
        <label for="name" class="block mb-2 text-sm font-medium">Icon</label>
        <div class="w-full text-center">
          <img
            :src="service.icon"
            alt=""
            class="avatar w-10 h-10 mb-2 mx-auto cursor-pointer"
            @click="chooseImage"
            style="object-fit: contain"
          />
          <input
            accept="image/png, image/gif, image/jpeg"
            class="absolute top-0 left-0 z-0 opacity-0"
            type="file"
            name=""
            id=""
            @change="updateImage"
          />
        </div>
      </div>
    </div>

    <div class="mb-3 w-full">
      <label for="name" class="block mb-2 text-sm font-medium"
        >Description</label
      >
      <textarea
        rows="2"
        type="name"
        id="name"
        class="
          leading-loose
          text-sm
          rounded-lg
          textarea textarea-bordered
          block
          w-full
          p-2.5
        "
        placeholder="PersonX"
        @change="updateDescription($event)"
        :value="service.description"
      />
    </div>
  </div>
</template>

<script>
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default {
  props: ["index", "service"],
  data() {
    return {
      editIcon: false,
      title: "",
      description: "",
      icon: "",
    };
  },

  mounted() {
    this.title = this.service.title;
    this.description = this.service.description;
    this.icon = this.service.icon;
  },

  methods: {
    chooseImage($event) {
      $event.target.nextElementSibling.click();
    },
    updateImage($event) {
      if (!$event.target.files.length) return;

      let selectedImage = $event.target.files[0];
      const storage = getStorage();
      const storageRef = ref(storage, `icon-${this.getTimestampInSeconds()}`); // name of the uploaded image
      uploadBytes(storageRef, selectedImage).then((snapshot) => {
        getDownloadURL(storageRef).then((url) => {
          this.icon = url;
          this.updateService();
        });
      });
    },
    updateTitle(event) {
      this.title = event.target.value;
      this.updateService();
    },
    updateDescription(event) {
      this.description = event.target.value;
      this.updateService();
    },
    updateService() {
      let updatedService = {
        title: this.title,
        description: this.description,
        icon: this.icon,
        id: this.service.id,
      };
      this.$emit("updateService", {
        index: this.index,
        service: updatedService,
      });
    },
    getTimestampInSeconds() {
      return Math.floor(Date.now() / 1000);
    },
  },
};
</script>

<style>
</style>