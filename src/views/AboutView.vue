<template>
  <main>
    <section class="window bg-almost-white rounded-3xl text-purpur border-3 border-purpur sm:w-130 w-full">
      <div class="pixelFont bg-pinky-pink rounded-t-[21px] border-b-3 pl-3 flex pt-2">
        <div class="size-4 border-3 rounded-full bg-almost-white !ml-0.5"></div>
        <div class="size-4 border-3 rounded-full bg-almost-white !ml-0.5"></div>
        <div class="size-4 border-3 rounded-full bg-almost-white !ml-0.5"></div>
        <p class="!-mt-[3px] !mb-0.5 !ml-2.5">about_me.txt</p>
      </div>

      <h1 class="text-purpur pl-4 pt-4 pb-2 text-3xl font-bold">
        <i>Hiya, I’m Luna</i>
      </h1>
      <p class="p-4 pt-0">I’m a multimedia designer at EASV, who likes to create, design, and code. During my time
        there and
        in my spare
        time, I’ve done a buncha projects, ranging from websites to videos and everything in between. I’m always looking
        for new ways to challenge myself and push the boundaries of what I can create. <br>

        In my spare time I create my own music, study Japanese for fun, and rot in my bed.</p>
    </section>
    <section class="window bg-almost-white rounded-3xl text-dark-blue border-3 border-dark-blue sm:w-80 w-full">
      <div class="pixelFont bg-light-blue rounded-t-[21px] border-b-3 pl-3 flex pt-2">
        <div class="size-4 border-3 rounded-full bg-almost-white !ml-0.5"></div>
        <div class="size-4 border-3 rounded-full bg-almost-white !ml-0.5"></div>
        <div class="size-4 border-3 rounded-full bg-almost-white !ml-0.5"></div>
        <p class="!-mt-[3px] !mb-0.5 !ml-2.5">about_me.txt</p>
      </div>
      <div class="p-4 pt-4">
        <img src="../components/image/mini_mii.png" alt="" class="" />
        <a href="https://www.youtube.com/watch?v=NBe3IBCMDoc" class="!text-dark-blue">
          <button
            class="bg-almost-white rounded-2xl border-3 border-dark-blue hover:text-almost-white hover:bg-dark-blue cursor-pointer px-3 py-1 !mt-4 pixelFont">view
            cv</button></a>
      </div>
    </section>
  </main>
</template>

<script setup>
import { createDraggable } from 'animejs';
import { onMounted } from 'vue';

onMounted(() => {
  // Make only the pixelFont divs draggable
  const draggableElements = document.querySelectorAll('.window');
  draggableElements.forEach((element) => {
    createDraggable(element);
  });
});
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
