<template>
    <div>
        <nav>
            <h3>nc-amazon.co.uk</h3>
            <input placeholder="Search nc-amazon.co.uk"/>
            <button>🔍</button>
            <h4>Signed in as test@gmail.com</h4>
        </nav>
        <SubNavigationBar/>
    </div>
</template>

<script>
import SubNavigationBar from './SubNavigationBar.vue'
export default {
  components: { SubNavigationBar },
    name: 'NavigationBar',
    props: {

    },

}

</script>


<style scoped>
  nav {
    text-align: left;
    padding: 5px;
    background-color: black;
    color: white;
  }
  
  nav h3 {
    margin-left: 1%;
    margin-right: 30%;
    display: inline-block;
    cursor: pointer;
  }

  nav input {
    display: inline-block;
    padding-right: 40px;
    padding-top: 13px;
    padding-bottom: 13px;
    padding-left: 10px;
  }

  nav button {
    padding: 13px;
  }

  nav h4 {
    display: inline-block;
    margin-left: 20%;
    cursor: pointer;
  }

  nav select {
    margin-left: 30px;
    padding: 3px;
    padding-top: 13px;
    padding-bottom: 13px;
  }

</style>