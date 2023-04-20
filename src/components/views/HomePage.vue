<template>
  <div class="hello">
     <GetItems/>
  </div>
</template>

<script>

import GetItems from '../GetItems.vue';


export default {
  components: { GetItems },
  name: 'HomePage',
  data () {
    return  {
      
    }
  },
  props: []
  
}
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

div div h3 {
  color: black;
}
</style>


