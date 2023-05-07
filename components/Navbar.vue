<template>
  <div class="">
    <!-- mobile navbar -->
    <div
      class="
        absolute
        top-0
        left-0
        w-full
        mobile-navbar
        transition-all
        ease-in-out
        md:hidden
        has-animation
        bg-neutral-focus
      "
      :class="showMobileMenu ? 'block' : 'smart-hide'"
      style="z-index: 999; height: 100%"
    >
      <nav
        class="
          absolute
          w-full
          h-screen
          top-0
          left-0
          bottom-0
          flex flex-col
          py-6
          overflow-x-hidden
          px-1
          border-r border-primary
          overflow-y-auto
        "
      >
        <div
          class="flex flex-col justify-center items-center mb-8 p-2 relative"
        >
          <Logo :iconOnly="false" />
          <button
            class="
              absolute
              w-12
              h-12
              -top-1
              right-5
              flex
              items-center
              justify-center
              rounded-full
              text-center
            "
            @click="toggleMobileMenu"
            style="z-index: 9999"
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div>
          <ul
            class="flex flex-col justify-center align-center mx-auto"
            style="width: 250px"
          >
            <NavbarMenu
              v-for="(menu, index) in menus"
              :key="index"
              :to="menu.to"
              :isActive="$route.path.includes(menu.to)"
              :title="menu.title"
              :icon="menu.icon"
              :showFullWidth="true"
            />

            <li class="mb-1 flex nowrap items-center" @click="logout">
              <a
                :class="showMenu ? 'justify-between' : 'justify-center'"
                class="
                  block
                  w-full
                  p-2
                  text-sm
                  font-semibold
                  hover:text-error
                  rounded
                  overflow-hidden
                  max-height-custom
                  cursor-pointer
                "
                style="font-size: 18px"
              >
                <span
                  class="
                    inline-flex
                    justify-center
                    items-center
                    w-12
                    h-12
                    mx-auto
                    rounded-full
                  "
                  style="margin-left: 26px"
                >
                  <i class="fa-solid fa-right-from-bracket"></i>
                </span>
                <span
                  class="ml-5 transition-all ease-in-out uppercase inline-block"
                >
                  Logout
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <nav class="flex justify-between items-center">
      <div
        class="absolute right-10 top-5"
        style="z-index: 99999999; margin-right: 7px"
      >
        <button
          class="
            navbar-burger
            flex
            items-center
            justify-center
            text-gray-600
            bg-blue-50
            hover:text-gray-700 hover:bg-blue-100
            w-10
            h-10
            rounded-full
            hidden
            md:block
          "
          @click="toggleMenu"
        >
          <i class="fa-solid fa-bars"></i>
        </button>

        <button
          v-show="!showMobileMenu"
          class="
            navbar-burger
            flex
            items-center
            justify-center
            w-10
            h-10
            rounded-full
            block
            md:hidden
          "
          @click="toggleMobileMenu"
        >
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </nav>

    <div class="navbar-menu relative z-50 hidden md:block">
      <nav
        class="
          top-0
          left-0
          bottom-0
          flex flex-col
          max-w-sm
          py-6
          overflow-x-hidden
          px-1
          overflow-y-auto
          h-screen
          bg-neutral-focus
        "
        :class="showMenu ? 'w-60' : 'w-32'"
      >
        <div class="flex flex-col justify-center items-center mb-8 p-2">
          <a class="text-3xl font-bold leading-none mx-auto">
            <Logo :iconOnly="!showMenu" />
          </a>
        </div>
        <div>
          <ul>
            <NavbarMenu
              v-for="(menu, index) in menus"
              :key="index"
              :to="menu.to"
              :isActive="$route.path.includes(menu.to)"
              :title="menu.title"
              :icon="menu.icon"
              :showFullWidth="showMenu"
            />
          </ul>
        </div>
        <div class="mt-auto">
          <div class="">
            <li class="mb-1 flex nowrap items-center" @click="logout">
              <a
                :class="showMenu ? 'justify-between' : 'justify-center'"
                class="
                  block
                  w-full
                  p-2
                  text-sm
                  font-semibold
                  hover:text-error
                  rounded
                  overflow-hidden
                  max-height-custom
                  cursor-pointer
                "
                style="font-size: 18px"
              >
                <span
                  class="
                    inline-flex
                    justify-center
                    items-center
                    w-12
                    h-12
                    mx-auto
                    rounded-full
                  "
                  style="margin-left: 26px"
                >
                  <i class="fa-solid fa-right-from-bracket"></i>
                </span>
                <span
                  class="ml-5 transition-all ease-in-out uppercase"
                  :class="showMenu ? 'inline-block' : 'hidden'"
                >
                  Logout
                </span>
              </a>
            </li>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
  data() {
    return {
      showMenu: false,
      showMobileMenu: false,
      menus: [
        {
          title: "home",
          to: "/dashboard",
          icon: "fa-solid fa-house",
        },
        {
          title: "about",
          to: "/about",
          icon: "fa-solid fa-circle-info",
        },
        {
          title: "services",
          to: "/services",
          icon: "fa-solid fa-list",
        },
        {
          title: "resume",
          to: "/resume",
          icon: "fa-solid fa-timeline",
        },
        {
          title: "portfolio",
          to: "/portfolio",
          icon: "fa-solid fa-briefcase",
        },
        {
          title: "contact",
          to: "/contact",
          icon: "fa-solid fa-address-book",
        },
        {
          title: "settings",
          to: "/settings",
          icon: "fa-solid fa-gear",
        },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    closeMobileMenu() {
      this.showMobileMenu = false;
    },

    logout() {
      // signOut

      this.$fire.auth
        .signOut()
        .catch((error) => {
          console.log(error);
        })
        .then((user) => {
          this.$router.push("/");
        });
    },
  },
};
</script>


<style>
nav,
div,
p,
a,
.has-animation,
button {
  transition: all 0.4s ease-in-out;
}
.max-height-custom {
  max-height: 60px !important;
}

.smart-hide {
  transform: translateY(-150vh);
  opacity: 0;
}
</style>