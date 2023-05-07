<template>
  <div class="w-full  text-left mt-0  px-6 ">
    <p class="text-xl font-bold border-b border-gray-400 pb-4">
      <slot name="title" />
    </p>
    <div class="my-5 mx-auto flex flex-wrap">
      <slot name="content" />
    </div>
  </div>
</template>
  