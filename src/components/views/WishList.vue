<template>
    <h1>Your Wishlist</h1>
   <div v-if="wishlist">
   
   </div>
   <div v-else>
    <h3>You do not currently have any items in your wishlist</h3>
   </div>
</template>


<script>
export default {
    name: "WishList",
    data() {
        return {
            wishlist: null
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