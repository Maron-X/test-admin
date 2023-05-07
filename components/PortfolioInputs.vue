<template>
  <div class="w-full flex flex-wrap pb-2 border-bborder-gray-400  mb-3 relative">
    <RemoveButton
      class="absolute right-2 -top-2"
      @click="$emit('removeWorks', index)"
    />

    <div class="w-full flex">
      <div class="w-full md:w-1/2 mb-2 md:pr-4">
        <label
          for="name"
          class="block mb-2 text-sm font-medium "
          >image</label
        >
        <div class="w-full text-center">
          <img
            :src="work.image"
            alt=""
            class="avatar w-40 h-40 mb-2 mx-auto cursor-pointer"
            @click="chooseImage"
            style="object-fit: contain"
          />
          <input
            class="absolute top-0 left-0 z-0 opacity-0"
            accept="image/png, image/gif, image/jpeg"
            type="file"
            name=""
            id=""
            @change="updateImage($event, 'image')"
          />
        </div>
      </div>

      <div class="mb-3 w-full md:w-1/2">
        <label
          for="name"
          class="block mb-2 text-sm font-medium "
          >Cover</label
        >
        <div class="w-full text-center">
          <img
            :src="work.cover"
            
            alt=""
            class="avatar w-40 h-40 mb-2 mx-auto cursor-pointer"
            @click="chooseImage"
            style="object-fit: contain"

          />
          <input
          accept="image/png, image/gif, image/jpeg"
            class="absolute top-0 left-0 z-0 opacity-0"
            type="file"
            name=""
            id=""
            @change="updateImage($event, 'cover')"
          />
        </div>
      </div>
    </div>

    <div class="mb-3 w-full md:w-1/2 md:pr-4">
      <label
        for="name"
        class="block mb-2 text-sm font-medium "
        >Category</label
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
        :value="work.category"
        @change="updateCategory($event)"
      />
    </div>
    <div class="mb-3 md:w-1/2 w-full">
      <label
        for="name"
        class="block mb-2 text-sm font-medium "
        >title</label
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
        :value="work.title"
      />
    </div>

    <div class="mb-3 w-full">
      <label
        for="name"
        class="block mb-2 text-sm font-medium "
        >Client</label
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
        @change="updateClient($event)"
        :value="work.client"
      />
    </div>

    <div class="mb-3 w-full">
      <label
        for="name"
        class="block mb-2 text-sm font-medium "
        >skills</label
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
        @change="updateSkills($event)"
        :value="work.skills"
      />
    </div>
    <div class="mb-3 w-full">
      <label
        for="name"
        class="block mb-2 text-sm font-medium "
        >url</label
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
        @change="updateUrl($event)"
        :value="work.url"
      />
    </div>

    <div class="mb-3 w-full">
      <label
        for="name"
        class="block mb-2 text-sm font-medium "
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
        :value="work.description"
      />
    </div>
  </div>
</template>

<script>
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
export default {

  props: ["index", "work"],
  data() {
    return {
      editIcon: false,
      category: "",
      client: "",
      cover: "",
      description: "",
      image: "",
      skills: [],
      title: "",
      url: "",
    };
  },
  mounted() {
    setTimeout(() => {
      this.updateLocalData();
    }, 1000);
  },
  methods: {
    chooseImage($event) {
      $event.target.nextElementSibling.click();
    },
    updateImage($event, type) {
      console.log("update type: ", type)
      if (!$event.target.files.length) return;

      let selectedImage = $event.target.files[0];
      const storage = getStorage();
      const storageRef = ref(
        storage,
        `work-${type}-${this.getTimestampInSeconds}`
      ); // name of the uploaded image
      uploadBytes(storageRef, selectedImage).then((snapshot) => {
        getDownloadURL(storageRef).then((url) => {
          if (type == "image") this.image = url;
          if (type == "cover") this.cover = url;

          this.updateWorks();
        });
      });
    },
    updateLocalData() {
      this.category = this.work.category;
      this.cover = this.work.cover;
      this.client = this.work.client;
      this.description = this.work.description;
      this.image = this.work.image;
      this.skills = this.work.skills;
      this.title = this.work.title;
      this.url = this.work.url;
    },
    updateCategory(event) {
      this.category = event.target.value;
      this.updateWorks();
    },

    updateClient(event) {
      this.client = event.target.value;
      this.updateWorks();
    },
    updateDescription(event) {
      this.description = event.target.value;
      this.updateWorks();
    },

    updateSkills(event) {
      this.skills = event.target.value;
      this.updateWorks();
    },
    updateTitle(event) {
      this.title = event.target.value;
      this.updateWorks();
    },
    updateUrl(event) {
      this.url = event.target.value;
      this.updateWorks();
    },
    updateWorks() {
      let updatedWorks = {
        category: this.category,
        cover: this.cover,
        client: this.client,
        description: this.description,
        image: this.image,
        skills: this.skills,
        title: this.title,
        url: this.url,
        id: this.work.id,

      };
      console.log("updatedWorks: ", updatedWorks);
      this.$emit("updateWorks", {
        index: this.index,
        works: updatedWorks,
      });
    },
  },
  getTimestampInSeconds() {
      return Math.floor(Date.now() / 1000);
    },
};
</script>

<style>
</style>