<template>
  <div v-if="basket"  >
    <section class="basket flex-col">
      <h2>Basket:</h2>
      <div v-for="item in basket" :key="item.item_id">
			<ul class="basketList flex-col">
						
        <li class="basketItem flex-row">
          <img :src=item.img_url alt={{item.item_name}} />
          <div class="basketInfo">
                <router-link :to ="`/item/${item.item_id}`">
								<h3>{{item.item_name}}</h3>
                </router-link>
								<h3>{{(item.price / 100).toLocaleString("en-gb", {
						style: "currency",
						currency: "gbp",
					})}}</h3>
							</div>
              <button class="delete"> Remove from basket </button>
						</li>
			</ul>
    </div>
    </section>
   </div>
   <div v-else>
    <h3>You do not currently have any items in your basket</h3>
   </div>
</template>


<script>
import { fetchBasket } from '../../api';

export default {
    name: "YourBasket",
    data() {
        return {
            basket: []
        }
    },
    mounted() {
    fetchBasket("Paul-R").then((response) => {
      console.log(response)
      this.basket = response
    })
  },
}

</script>


<style scoped>
  h1 {
    color: black;
  }

  div {
    color: black;
   
  }


.flex-col {
  display: flex;
  flex-direction: column;
}

.flex-row {
  display: flex;
  flex-direction: row;
}


.basket {
  width: 80%;
  margin: 2%;
  margin-left: 8%;
  padding: 30px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0px 0px 10px lightgray;
  overflow: hidden;
  justify-content: center;
}

.basket h2 {
  font-size: 2rem;
}

.basketList {
  gap: 20px;
  width: 95%;
  padding: 20px;
}

.basketItem {
  overflow: hidden;
  border-radius: 20px;
  background-color: var(--ghost-white);
  box-shadow: 0px 0px 10px lightgray;
  width: 80%;
  position: relative;
  justify-content: center;
  margin-left: 15%;

}

.basketItem img {
  width: 20%;
}

.basketInfo {
  padding: 0 10px 0 10px;
  width: 100%;
  display: grid;
  grid-template: 1fr/ 5fr 1fr 1fr;
  align-items: center;
  text-align: center;
}

button {
  background-color: var(--ghost-white);
  padding: 10px;
  border-radius: 20px;
  border: 2px solid var(--ghost-white);
}

button:hover {
  cursor: pointer;
  border: 2px solid var(--granite-grey);
}

button[type=submit] {
  background-color: var(--darker-orange);
  width: 10%;
  transition: 0.2s linear;
  border: 2px solid antiquewhite;
}

button[type=submit]:hover {
  background-color: var(--lighter-orange);
  border: 2px solid var(--darker-orange);
}

.delete {
  background: rgb(243, 37, 37);
  transition: 0.2s linear;
  color: var(--ghost-white);
}

.delete:hover {
  background-color: rgb(240, 82, 82);
  border: 2px solid rgb(243, 37, 37);
}

a {
  text-decoration: none;
  color: black;

}

</style>