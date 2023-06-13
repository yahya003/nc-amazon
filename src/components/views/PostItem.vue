<template>
  <h1>Post an Item</h1>
    <div>
      <form>
        <input required v-model="itemName" placeholder="Item Name"/>
        <input required  v-model="itemPrice" placeholder="Item Price"/>
        <input required v-model="itemURL" placeholder="Item Image URL"/>
        <button type = "button" @click="listItem(itemName, itemPrice, itemURL)">Submit</button>
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
      }
    },

    methods: {
      listItem:  async function (itemName, itemPrice, itemURL ) {
        const item = {
          itemName: itemName,
          itemPrice: itemPrice,
          itemURL: itemURL
        }
        console.log("here")
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