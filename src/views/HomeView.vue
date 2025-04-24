<script setup>
import { createDraggable } from 'animejs';
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router'

onMounted(() => {
  // Make only the pixelFont divs draggable
  const draggableElements = document.querySelectorAll('.window');
  draggableElements.forEach((element) => {
    createDraggable(element);
  });
});
</script>

<template>
  <main>
    <section class="window bg-almost-white rounded-3xl text-purpur border-3 border-purpur sm:w-100 w-full">
      <div class="pixelFont bg-pinky-pink rounded-t-[21px] border-b-3 pl-3 flex pt-2">
        <div class="size-4 border-3 rounded-full bg-almost-white !ml-0.5"></div>
        <div class="size-4 border-3 rounded-full bg-almost-white !ml-0.5"></div>
        <div class="size-4 border-3 rounded-full bg-almost-white !ml-0.5"></div>
        <p class="!-mt-[3px] !mb-0.5 !ml-2.5">welcome.finder</p>
      </div>

      <h1 class="text-purpur pl-4 pt-4 pb-2 text-3xl font-bold">
        <i>Welcome to my portfolio!</i>
      </h1>
      <p class="p-4 pt-0">Somewhere specific you're looking for?</p>
      <div class="flex flex-wrap gap-4 px-4 pb-4">
        <RouterLink to="/projects" class="items-center justify-center flex flex-col">
          <font-awesome-icon icon="fa-solid fa-folder" class="text-5xl" />
          <p class="text-1xl">projects</p>
        </RouterLink>
        <RouterLink to="/about" class="items-center justify-center flex flex-col">
          <font-awesome-icon icon="fa-solid fa-folder" class="text-5xl" />
          <p class="text-1xl">about</p>
        </RouterLink>
      </div>
    </section>
    <section class="window bg-almost-white rounded-3xl text-dark-blue border-3 border-dark-blue sm:w-130 w-full">
      <div class="pixelFont bg-light-blue rounded-t-[21px] border-b-3 pl-3 flex pt-2">
        <div class="size-4 border-3 rounded-full bg-almost-white !ml-0.5"></div>
        <div class="size-4 border-3 rounded-full bg-almost-white !ml-0.5"></div>
        <div class="size-4 border-3 rounded-full bg-almost-white !ml-0.5"></div>
        <p class="!-mt-[3px] !mb-0.5 !ml-2.5">follow_me.popup</p>
      </div>
      <p class="p-4 pt-4">Check me out on other social medias and støffz</p>
      <div class="pb-3 flex justify-end px-4">
        <a href="https://www.linkedin.com/in/lunadamm/" class="!text-dark-blue">
          <button
            class="bg-almost-white rounded-2xl border-3 border-dark-blue hover:text-almost-white hover:bg-dark-blue cursor-pointer px-3 py-1 !mx-1 pixelFont">linkedin</button></a>
        <a href="https://www.youtube.com/watch?v=NBe3IBCMDoc" class="!text-dark-blue">
          <button
            class="bg-almost-white rounded-2xl border-3 border-dark-blue hover:text-almost-white hover:bg-dark-blue cursor-pointer px-3 py-1 !mx-1 pixelFont">youtube</button></a>
      </div>
    </section>
  </main>
</template>
