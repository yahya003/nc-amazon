<script setup>
import { RouterView } from "vue-router";
import NavigationBar from "./components/NavigationBar.vue"
import SubNavigationBar from "./components/SubNavigationBar.vue";

</script>


<template>
  <SubNavigationBar/>  
  <router-view></router-view>
</template>

<style>
#app {
  text-align: center;
}

</style>
