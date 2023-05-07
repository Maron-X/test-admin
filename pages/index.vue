<template>
  <section class="">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div
        class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0"
      >
        <div
          class="bg-neutral p-6 space-y-4 md:space-y-6 sm:p-8 border rounded-lg border-info"
        >
          <h1
            class="text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white"
          >
            PersonX Admin Panel
          </h1>
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium dark:text-white"
                >Your email</label
              >
              <input
                type="email"
                name="email"
                id="email"
                v-model="auth.email"
                class="sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium dark:text-white"
                >Password</label
              >
              <input
                type="password"
                v-model="auth.password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required=""
              />
            </div>

            <button
              type="button"
              @click="login"
              class="w-full text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center btn btn-primary"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $fire, redirect }) {
    if ($fire.auth.currentUser) {
      console.log("logenIn already");
      //  login page
      redirect("/dashboard");
    }
  },

  data() {
    return {
      auth: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", this.auth)
        .then(() => {
          this.$store.dispatch("loadSubdomainData");
          this.$router.push("/dashboard");
        })
        .catch((err) => {
          this.$toast.error("Incorrect email or password");
        });
    },
  },
  name: "IndexPage",
};
</script>
