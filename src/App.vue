<script setup>
import { RouterView } from "vue-router";
import NavigationBar from "./components/NavigationBar.vue"

</script>

<template>
  <NavigationBar/>
  <router-view></router-view>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

</style>
