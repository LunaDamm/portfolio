<template>
  <div>
    <section class="window bg-almost-white rounded-3xl text-purpur border-3 border-purpur md:w-160 md:h-100">
      <div class="pixelFont bg-pinky-pink rounded-t-[21px] border-b-3 pl-3 flex pt-2">
        <div class="size-4 border-3 rounded-full bg-almost-white !ml-0.5"></div>
        <div class="size-4 border-3 rounded-full bg-almost-white !ml-0.5"></div>
        <div class="size-4 border-3 rounded-full bg-almost-white !ml-0.5"></div>
        <p class="!-mt-[3px] !mb-0.5 !ml-2.5">Pathfinder.app</p>
      </div>
      <div class="md:flex w-full">
        <div
          class="flex flex-wrap md:grid h-full md:w-1/5 pt-2 pl-3 w-full md:pb-0 pb-2 md:border-b-0 border-b-3 border-purpur">
          <div class="flex items-center p-2">
            <font-awesome-icon icon="fa-solid fa-folder" />
            <p class="pl-2">all</p>
          </div>
          <div class="md:pt-1 flex items-center p-2">
            <font-awesome-icon icon="fa-solid fa-sheet-plastic" />
            <p class="pl-2">projects</p>
          </div>
          <div class="md:pt-1 flex items-center p-2">
            <font-awesome-icon icon="fa-solid fa-camera" />
            <p class="pl-2">images</p>
          </div>
          <div class="md:pt-1 flex items-center p-2">
            <font-awesome-icon icon="fa-solid fa-music" />
            <p class="pl-2">musics</p>
          </div>
        </div>
        <div class="h-90 border-l-0 md:border-l-3 w-full md:w-4/5">
          <!-- repeat projects thumbnail -->
          <div class="flex flex-wrap p-2">
            <router-link :to="`/projects/${project.id}`" class="sm:w-1/4 sm:h-1/4 w-1/3 h-1/3"
              v-for="project in projects" :key="project.id">
              <img :src="project.photo" alt="Project Thumbnail"
                class="rounded-2xl w-full h-full object-cover aspect-3/2" />
              <p class="w-full text-center">{{ project.filename }}{{ project.fileExtension }}</p>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

import { useProjectsDatabase } from '@/modules/useProjectsDatabase';

const { projects } = useProjectsDatabase();

const selectedType = ref('')

const filteredProjects = computed(() => {
  let result = selectedType.value
    ? projects.filter((project) => project.type === selectedType.value)
    : projects;
  console.log('Filtered projects:', result); //debug
  return result;
});

/* let isProjectDataVisible = ref([])

const toggleProjectData = (index) => {
  isProjectDataVisible.value = !isProjectDataVisible.value;
  console.log('Project data toggled for index:', index);
}; */

console.log(projects);

console.log(filteredProjects.value);

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

<style lang="scss" scoped></style>
