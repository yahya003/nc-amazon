<template>
  <div v-if="item">
   <div class="item">
      <img :src=item.img_url alt="Oops this image could not be found"/>
      <h3>{{ item.item_name }}</h3>
      <p>{{ item.description }}</p>
      <h5>⭐  ⭐  ⭐  ⭐  ({{Math.floor(Math.random() * 1000) + 100}})</h5>
      <h4>£{{ item.price/20 }}</h4>
      <h6>FREE Delivery by NC-Amazon</h6>
      <div>
        <button @click="addToBasket">Add to Basket</button>
        <br>
        <button>Add to Wishlist</button>
        <br>
        <button @click="addToOrders">Buy Now</button>
      </div>
    </div>
  </div>
  <div v-else-if="!item">
    <h1>Loading...</h1>
  </div>
  <div class = "else" v-else>
    <h1>There are no available items</h1>
  </div>


</template>


<script>
import { ref, watchEffect } from 'vue';
import { fetchBasket, fetchItemById, orderItem, postToBasket } from '../../api'

export default {
    name: "SingleItem",
    props: ["id"],

    setup(props) {
    let item = ref("https://thumbs.dreamstime.com/z/website-information-loading-circle-icon-website-information-loading-circle-isolated-icon-134206627.jpg")
    let basket = ref(null)
    const fetchItems = async () => {
      const data = await fetchItemById(props.id) 
      return data;
    };

    const addToBasket = async () => {
      await postToBasket("Paul-R", props.id)
    };
    
    const addToOrders = async () => {
      await orderItem("Paul-R", props.id)
    };

    watchEffect(() => {
      fetchItems(props.id).then((res) => {
        item.value = res;
      });
 
    })

    return { item, fetchItemById, postToBasket, basket, addToBasket, addToOrders  }
    }}



</script>



<style scoped>

  .item {
    color: black;
    display: inline-block;
    padding: 20px;
    border: solid 1px black;
    margin: 10px;
    cursor: pointer;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  div img {
    width: 400px;
    height: 300px;
  }

  button {
    width: 400px;
    padding: 15px;
    margin: 10px;
    border-radius: 25px;
    background-color: rgb(230, 230, 22);
    cursor: pointer;
  }

  .else {
    color: black;
  }



</style>