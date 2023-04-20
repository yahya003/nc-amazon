<template>
    <h1>Your Basket</h1>
   <div v-if="basket">
   
   </div>
   <div v-else>
    <h3>You do not currently have any items in your basket</h3>
   </div>
</template>


<script>
export default {
    name: "YourBasket",
    data() {
        return {
            basket: null
        }
    }
}

</script>


<style scoped>
  h1 {
    color: black;
  }

  div {
    color: black;
  }

</style>