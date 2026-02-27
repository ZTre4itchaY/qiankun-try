<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'

import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <div>
     <a target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <div>
      <router-link to="/sub-child1">子应用1路由11111</router-link> | 
      <router-link to="/sub-child2">子应用1路由22222</router-link>
    </div>
    <RouterView></RouterView>
  </div>
  <HelloWorld msg="Vite + Vue Sub One" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
