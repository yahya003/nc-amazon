<template>
  <h1>Post an Item</h1>
    <div>
      <form>
        <input required v-model="itemName" placeholder="Item Name"/>
        <input required  v-model="description" placeholder="Item Description"/>
        <input required  v-model="itemPrice" placeholder="Item Price"/>
        <input required v-model="itemURL" placeholder="Item Image URL"/>
        <button type = "button" @click="listItem(itemName, itemPrice, itemURL, description)">Submit</button>
      </form>
    </div>
</template>

<script>
import { postItem } from '../../api';

  export default {
    name: "PostItem",

    data() {
      return {
        itemName: null,
        itemPrice: null,
        itemURL: null,
        description: null,
      }
    },

    methods: {
      listItem:  async function (itemName, itemPrice, itemURL, description ) {
        const item = {
          item_name: itemName,
          price: itemPrice,
          description: description,
          img_url: itemURL,
          category_name: "Clothing"
        }
        await postItem(item)
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: black;
  }

  input {
    display: block;
    margin: 10px auto 0 auto;
    text-align: center;
    padding: 5px;
    width: 70%;
  }

  button {
    margin-top: 20px;
    padding: 4px;
  }

</style>