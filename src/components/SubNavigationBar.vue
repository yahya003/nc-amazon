<template>
  <div>
    <nav>
        <router-link to ="/">Home</router-link>
        <router-link to ="/orders">Your Orders</router-link>
        <router-link to = "/wishlist">Wish List</router-link>
        <router-link to = "/basket">Basket</router-link>
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
  nav router-link {
    color: white;
    text-decoration: none;
    cursor: pointer;
    margin: 30px;
  }   
</style>