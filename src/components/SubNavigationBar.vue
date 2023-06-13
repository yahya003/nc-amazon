<template>
  <div>
    <nav>
        <router-link to ="/">Home</router-link>
        <router-link to ="/orders">Orders</router-link>
        <router-link to = "/basket">Basket</router-link>
        <router-link to = "/postItem">Post an Item</router-link>
    </nav>
  </div>
</template>

<script>
   export default {
    name: "SubNavigationBar"
   }
</script>

<style scoped>
  nav {
    padding: 15px;
    background-color: rgb(54,69,79);
    text-align: center;
  }
  nav a {
    color: white;
    text-decoration: none;
    cursor: pointer;
    margin: 30px;
    
  }   
</style>