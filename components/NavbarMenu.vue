<template>


  <li
    class="mb-1 flex nowrap items-center"
    :class="showFullWidth ? 'justify-between' : 'justify-center'"
  >
    <nuxt-link
      class="
        block
        w-full
        p-2
        text-sm
        font-semibold
        
        rounded
        overflow-hidden
        max-height-custom
      "
      :class="isActive ? 'bg-primary' : 'hover:text-primary'"
      :to="to"
      style="font-size:18px"
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
        <i :class="icon"></i>
      </span>
      <span
        class="ml-5 transition-all ease-in-out uppercase"
        :class="showFullWidth ? 'inline-block' : 'hidden'"
      >
        {{ title }}
      </span>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: ["to", "isActive", "title", "icon", "showFullWidth"],
};
</script>

<style>

span{
  transition: all 0.8s ease-in-out;
}
.navbar-icon-hover {
  display: none;
}
/* hover effect */
.navbar-item:hover img.navbar-icon {
  display: none;
}

.navbar-item:hover .navbar-icon-hover {
  display: block;
}

/* active menu */

.navbar-item.text-blue-600 img.navbar-icon-hover {
  display: block !important;
}

.navbar-item.text-blue-600 img.navbar-icon {
  display: none !important;
}
</style>