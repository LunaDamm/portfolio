<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="">
    <div class="wrapper flex justify-center pb-4">
      <nav
        class="bg-almost-white rounded-3xl text-dark-blue border-3 border-purpur h-12 flex justify-center gap-x-5 px-6 items-center">
        <RouterLink to="/"><font-awesome-icon icon="fa-solid fa-house" class="text-2xl" /></RouterLink>
        <RouterLink to="/about"><font-awesome-icon icon="fa-regular fa-address-card" class="text-2xl" />
        </RouterLink>
        <RouterLink to="/projects"><font-awesome-icon icon="fa-solid fa-sheet-plastic" class="text-2xl" />
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
/* header {
     line-height: 1.5;
     max-height: 100vh;
} */

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  /*   width: 100%; */
  font-size: 12px;
  text-align: center;
  /* margin-top: 2rem; */
}

nav a.router-link-exact-active {
  color: var(--color-pinky-pink);
}

/* nav a.router-link-exact-active:hover {
  background-color: transparent;
} */

nav a {
  display: inline-block;
  padding: 0 1rem;
  /*   border-left: 1px solid var(--color-border); */
}

nav a:first-of-type {
  border: 0;
}




@media (min-width: 1024px) {
  /*   header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } */

  .logo {
    margin: 0 2rem 0 0;
  }



  /*   nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  } */
}
</style>
