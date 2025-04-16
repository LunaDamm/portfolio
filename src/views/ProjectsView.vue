<script setup>
/* import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' */
</script>

<template>
  <div>
    <section class="window bg-almost-white rounded-3xl text-purpur border-3 border-purpur w-160 h-100">
      <div class="pixelFont bg-pinky-pink rounded-t-[21px] border-b-3 pl-3 flex pt-2">
        <div class="size-4 border-3 rounded-full bg-almost-white !ml-0.5"></div>
        <div class="size-4 border-3 rounded-full bg-almost-white !ml-0.5"></div>
        <div class="size-4 border-3 rounded-full bg-almost-white !ml-0.5"></div>
        <p class="!-mt-[3px] !mb-0.5 !ml-2.5">Pathfinder.app</p>
      </div>
      <div class="flex">
        <div class="h-full w-1/5">
          <div class="pt-2 pl-3 flex items-center">
            <font-awesome-icon icon="fa-solid fa-folder" />
            <font-awesome-icon :icon="['fas', 'user-secret']" />
            <p class="pl-2">all</p>
          </div>
          <div class="pt-2 pl-3 flex items-center">
            <font-awesome-icon icon="fa-solid fa-sheet-plastic" />
            <font-awesome-icon :icon="['fas', 'user-secret']" />
            <p class="pl-2">projects</p>
          </div>
          <div class="pt-2 pl-3 flex items-center">
            <font-awesome-icon icon="fa-solid fa-camera" />
            <font-awesome-icon :icon="['fas', 'user-secret']" />
            <p class="pl-2">images</p>
          </div>
          <div class="pt-2 pl-3 flex items-center">
            <font-awesome-icon :icon="['fas', 'music']" />
            <font-awesome-icon :icon="['fas', 'user-secret']" />
            <p class="pl-2">musics</p>
          </div>
        </div>
        <div class="h-90 border-l-3 w-4/5">
          <!-- repeat projects thumbnail -->
          <div class="flex flex-wrap p-1">
            <div class="w-1/4 h-1/4 p-2">
              <img src="../components/image/stars.png" alt="Project Thumbnail"
                class="rounded-2xl w-full h-full object-cover" />
              <p class="w-full text-center">stars.proj</p>
            </div>
            <div class="w-1/4 h-1/4 p-2">
              <img src="../components/image/background.jpg" alt="Project Thumbnail"
                class="rounded-2xl w-full h-full object-cover" />
              <p class="w-full text-center">cocio.proj</p>
            </div>
            <div class="w-1/4 h-1/4 p-2">
              <img src="../components/image/stars.png" alt="Project Thumbnail"
                class="rounded-2xl w-full h-full object-cover" />
              <p class="w-full text-center">plastic.proj</p>
            </div>
            <div class="w-1/4 h-1/4 p-2">
              <img src="../components/image/stars.png" alt="Project Thumbnail"
                class="rounded-2xl w-full h-full object-cover" />
              <p class="w-full text-center">easv-com.proj</p>
            </div>
            <div class="w-1/4 h-1/4 p-2">
              <img src="../components/image/stars.png" alt="Project Thumbnail"
                class="rounded-2xl w-full h-full object-cover" />
              <p class="w-full text-center">doggie.png</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>



<style lang="scss" scoped></style>
