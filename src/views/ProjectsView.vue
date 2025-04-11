<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
</script>

<template>
  <div>
    <section class="window bg-almost-white rounded-3xl text-purpur border-3 border-purpur w-160 h-100">
      <div class="pixelFont bg-pinky-pink rounded-t-[21px] border-b-3 pl-3 flex pt-2">
        <div class="size-4 border-3 rounded-full bg-almost-white !ml-0.5"></div>
        <div class="size-4 border-3 rounded-full bg-almost-white !ml-0.5"></div>
        <div class="size-4 border-3 rounded-full bg-almost-white !ml-0.5"></div>
        <p class="!-mt-[3px] !mb-0.5 !ml-2.5">Finder.app</p>
      </div>
      <div class="flex">
        <div class="h-full w-1/5">
          <FontAwesomeIcon :icon="byPrefixAndName.fas['house']" />
        </div>
        <div class="h-90 border-l-3 w-4/5">

        </div>
      </div>
    </section>
  </div>
</template>



<style lang="scss" scoped></style>
