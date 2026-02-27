<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import { RouterView, RouterLink } from "vue-router"

// const router = useRouter()

// const toSub = () => {
//   // console.log
//   router.push('/sub1')
// }

</script>

<template>
  <div class="main">
    <!-- <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->
    <!-- <div class=""></div> -->
    <div class="nav-bar">
      <router-link to="/sub1">子应用1</router-link> | 
      <router-link to="/sub2">子应用2</router-link> 
    </div>
    <RouterView></RouterView>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped lang="less">
.main{
  .nav-bar{
    // margin: 0 auto;
    text-align: center;
  }
}
</style>
