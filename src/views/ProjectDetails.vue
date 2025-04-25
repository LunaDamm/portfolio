<template>
  <div>
    <router-link to="/projects">
      <button
        class="bg-almost-white rounded-2xl border-3 border-dark-blue hover:text-almost-white hover:bg-dark-blue cursor-pointer px-3 py-1 !mx-1 pixelFont text-color-dark-blue !mb-4">
        back
      </button>
    </router-link>
    <div class="">
      <section
        class="window bg-almost-white rounded-3xl text-purpur border-3 border-purpur md:w-200 md:absolute md:top-6/12 sm:left-4/6 md:-translate-x-1/2 md:-translate-y-1/2 !mb-4">
        <div class="pixelFont bg-pinky-pink rounded-t-[21px] border-b-3 pl-3 flex pt-2">
          <div class="size-4 border-3 rounded-full bg-almost-white !ml-0.5"></div>
          <div class="size-4 border-3 rounded-full bg-almost-white !ml-0.5"></div>
          <div class="size-4 border-3 rounded-full bg-almost-white !ml-0.5"></div>
          <p class="!-mt-[3px] !mb-0.5 !ml-2.5"> {{ project.filename }}{{ project.fileExtension }}</p>
        </div>
        <img :src="project.photo" draggable="false" :alt="project.name"
          class="rounded-b-[21px] w-full object-cover aspect-3/2" />
      </section>
      <section
        class="window bg-almost-white rounded-3xl text-dark-blue border-3 border-dark-blue md:w-130 md:absolute md:top-7/12 sm:left-3/12 md:-translate-x-1/2 md:-translate-y-1/2 !mb-4">
        <div class="pixelFont bg-light-blue rounded-t-[21px] border-b-3 pl-3 flex pt-2">
          <div class="size-4 border-3 rounded-full bg-almost-white !ml-0.5"></div>
          <div class="size-4 border-3 rounded-full bg-almost-white !ml-0.5"></div>
          <div class="size-4 border-3 rounded-full bg-almost-white !ml-0.5"></div>
          <p class="!-mt-[3px] !mb-0.5 !ml-2.5">about_{{ project.filename }}.txt</p>
        </div>
        <div class="px-4 py-4">
          <h1 class="font-bold">{{ project.name }}</h1>
          <p class="pt-2">
            {{ project.description }}
          </p>
          <p class="pt-2">
            {{ project.date }}
          </p>
          <a :href="project.link" target="_blank" class="pt-2 !-m-0.5">view {{ project.type }}</a>
          <p class="pt-2">Made by {{ project.group }}, using:</p>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center pt-2">
            <div v-for="(technology, index) in combinedTechnologies" :key="index"
              class="grid justify-items-center w-full">
              <img class="size-12" :src="technology.icon" alt="" />
              <p class="italic">{{ technology.name }}</p>
            </div>
          </div>
        </div>
        <!-- <div class="pb-3 flex px-4 justify-between">
        <button
          class="bg-almost-white rounded-2xl border-3 border-dark-blue hover:text-almost-white hover:bg-dark-blue cursor-pointer px-3 py-1 !mx-1 pixelFont">
          ldft </button>
        <button
          class="bg-almost-white rounded-2xl border-3 border-dark-blue hover:text-almost-white hover:bg-dark-blue cursor-pointer px-3 py-1 !mx-1 pixelFont">
          right </button>
      </div> -->
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useProjectsDatabase } from '@/modules/useProjectsDatabase';
import { useRoute } from 'vue-router';

const { projects } = useProjectsDatabase();
const route = useRoute();
const project = computed(() => {
  return projects.value.find((p) => p.id === parseInt(route.params.id));
})

// Help from ChatGPT, combining technologies and icons into an array of objects
const combinedTechnologies = computed(() => {
  if (!project.value) return [];
  return project.value.technologiesIcons.map((icon, index) => ({
    icon,
    name: project.value.technologies[index],
  }));
});

import { createDraggable } from 'animejs';
import { onMounted } from 'vue';

onMounted(() => {
  const isDesktop = window.innerWidth > 640; // Adjust breakpoint as needed
  if (isDesktop) {
    const draggableElements = document.querySelectorAll('.window');
    draggableElements.forEach((element) => {
      createDraggable(element);
    });
  }
});



</script>

<style lang="scss" scoped></style>
