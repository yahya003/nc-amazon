<template>
    <h1>Your Orders</h1>
   <div v-if="orders">
   
   </div>
   <div v-else>
    <h3>You have not made any orders</h3>
   </div>
</template>


<script>
export default {
    name: "YourOrders",
    data() {
        return {
            orders: null
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