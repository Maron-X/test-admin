<template>
  <PageLayout>
    <template #title>Contact</template>
    <template #content>
      <SubTitle text="Social Chatting" />
      <FormInput
        class="w-full md:w-1/2"
        label="Messanger"
        storeKey="messanger"
      />
      <FormInput class="w-full md:w-1/2" label="Whatsapp" storeKey="whatsapp" />
      <FormInput class="w-full md:w-1/2" label="Telegram" storeKey="telegram" />

      <SubTitle text="Pages" />
      <FormInput
        class="w-full md:w-1/2"
        label="Facebook"
        storeKey="facebook"
        :isLink="true"
      />
      <FormInput
        class="w-full md:w-1/2"
        label="Instagram"
        storeKey="instagram"
        :isLink="true"
      />
      <FormInput
        class="w-full md:w-1/2"
        label="Dribbble"
        storeKey="dribbble"
        :isLink="true"
      />
      <FormInput
        class="w-full md:w-1/2"
        label="Behance"
        storeKey="behance"
        :isLink="true"
      />
      <FormInput
        class="w-full md:w-1/2"
        label="LinkedIn"
        storeKey="linkedIn"
        :isLink="true"
      />
      <!-- <FormInput
        class="w-full md:w-1/2"
        label="Upwork"
        storeKey="upwork"
        :isLink="true"
      />
      <FormInput
        class="w-full md:w-1/2"
        label="Freelancer"
        storeKey="freelancer"
        :isLink="true"
      /> -->

      <ActionButton
        label="Save"
        @click="$store.dispatch('updateFirebase', 'contact')"
      />
    </template>
  </PageLayout>
</template>

<script>
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
  methods: {},
};
</script>