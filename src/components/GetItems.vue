<template>
  <div v-for="item in items" :key="item.item_id">
    <router-link to ="/" class="text-dec">
      <img :src=item.img_url alt="Oops this image could not be found"/>
      <h3>{{ item.item_name }}</h3>
      <h5>⭐  ⭐  ⭐  ⭐  ({{Math.floor(Math.random() * 1000) + 100}})</h5>
      <h4>£{{ item.price/20 }}</h4>
      <h6>FREE Delivery by NC-Amazon</h6>
    </router-link>
  </div>
</template>

<script>

import { fetchItems } from '../api';

  export default {
    name: "GetItems",
    props: [],
    data() {
      return {
        items: []
      }
    },
    
    mounted() {
    fetchItems().then((response) => {
      console.log(response)
      this.items = response
    })
  },
  
}

  
</script>

<style scoped>
  div  {
    color: black;
    display: inline-block;
    padding: 20px;
    border: solid 1px black;
    margin: 10px;
    margin-top: 20px;
    cursor: pointer;
    text-align: center;
    background-color: cornsilk;
  }

  div div img {
    width: 300px;
    height: 320px;
    
  }

  .text-dec {
    text-decoration: none;
    color: black;
  }

</style>