<template>
  <PageLayout>
    <template #title>Settings</template>
    <template #content>
      <div class="w-full text-left">
        <SubTitle text="Change passowrd" />

        <div class="w-100 my-4">
          <label
            for="password"
            class="block mb-2 text-sm font-medium dark:text-white"
            >Current Password</label
          >
          <input
            type="password"
            v-model="currentPassword"
            name="password"
            id="password"
            placeholder="••••••••"
            class="password-input focus:border-primary-600"
            required=""
          />
        </div>
        <div class="w-100 my-4">
          <label
            for="password"
            class="block mb-2 text-sm font-medium dark:text-white"
            >New Password</label
          >
          <input
            type="password"
            v-model="newPassword"
            name="password"
            id="password"
            placeholder="••••••••"
            class="password-input focus:border-primary-600"
            required=""
          />
        </div>
        <div class="w-100 my-4 mb-8">
          <label
            for="password"
            class="block mb-2 text-sm font-medium dark:text-white"
            >Confirm New Password</label
          >
          <input
            type="password"
            v-model="newPasswordConfirm"
            name="password"
            id="password"
            placeholder="••••••••"
            class="password-input focus:border-primary-600"
            required=""
          />
        </div>
        <ActionButton
          class="mt-4"
          label="Update Password"
          @click="changePassword"
        />
      </div>
    </template>
  </PageLayout>
</template>

<script>
import {
  getAuth,
  updatePassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
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
  data() {
    return {
      currentPassword: "", // 
      newPassword: "",
      newPasswordConfirm: "",
    };
  },
  methods: {
    async changePassword() {
      let errorMessage = "";
      const newPassword = this.newPassword;
      const newPasswordConfirm = this.newPasswordConfirm;
      // check validation
     
      if (!(await this.isCurretPasswordCorrect()))
        errorMessage = "Password is incorrect!";
        
        if (!newPasswordConfirm || !newPassword)
        errorMessage = "Enter new password and confirmation first!";

      if (newPasswordConfirm !== newPassword)
        errorMessage = "New Password and Confirmation Are Not The Same!";

      if (errorMessage) {
        this.$toast.error(errorMessage);
        return;
      }
      const auth = getAuth();
      const user = auth.currentUser;
      updatePassword(user, newPassword).then(() => {
        // Update successful.
        this.$toast.info("Password Updated Successfully!");
      });
    },
    async isCurretPasswordCorrect() {
      let isCorrect = false;
      const auth = getAuth();
      await signInWithEmailAndPassword(
        auth,
        this.$fire.auth.currentUser.email,
        this.currentPassword
      )
        .then((userCeridential) => {
          isCorrect = true;
        })
        .catch((error) => {
          console.log("error: ", error);
          isCorrect = false;
        });

      return isCorrect;
    },
  },
};
</script>

<style>
.password-input {
  @apply rounded-lg  block w-full p-2.5;
}
</style>