<template>
  
  <div v-if="items">
    <div>

      <label>Category:
          <select v-model="chosenCategory">
              <option disabled selected>All</option>
              <option v-for="eachCategory in categories" :value=eachCategory.category_name > {{ eachCategory.category_name }}</option>
          </select>
          <button @click="searchByCategory(chosenCategory)">Search</button>
        </label>
    </div>
    
  <div class="items" v-for="item in items" :key="item.item_id">
    <router-link :to ="`/item/${item.item_id}`" class="text-dec">
      <img :src=item.img_url alt="Oops this image could not be found"/>
      <h3>{{ item.item_name }}</h3>
      <h5>⭐  ⭐  ⭐  ⭐  ({{Math.floor(Math.random() * 1000) + 100}})</h5>
      <h4>£{{ item.price/20 }}</h4>
      <h6>FREE Delivery by NC-Amazon</h6>
    </router-link>
  </div>
  </div>
  <div v-else>
    <h1 class="else">Loading...</h1>
  </div>
</template>

<script>
import { fetchCategories, fetchItemsByCategory } from '../api';
import { fetchItems } from '../api';


  export default {
    name: "GetItems",
    props: [],
  
    data () {
      return {
        categories: null,
        items: null,
        chosenCategory: "All"
      }
    },

    methods: {
       searchByCategory: async function (currentCategory) {
        const data = await fetchItemsByCategory(currentCategory)
        this.items = data 
      },
      
    },

   mounted() {
    fetchItems().then((response) => {
      this.items = response
    })
    fetchCategories().then((response) => {
        this.categories = response
      })
  },
  
}

  
</script>

<style scoped>
  .items {
    color: black;
    display: inline-block;
    padding: 20px;
    border: solid 1px black;
    margin: 10px;
    margin-top: 20px;
    cursor: pointer;
    text-align: center;
    background-color: whitesmoke;
  }

  div div img {
    width: 300px;
    height: 320px;
  }

  div label {
    color: black;
  }
  .text-dec {
    text-decoration: none;
    color: black;
  }

  .else {
    color: black;
  }



  select {
    margin-top: 20px;
    padding: 4px;

  }

  button {
    padding: 4px;
    margin-left: 20px;
  }

</style>