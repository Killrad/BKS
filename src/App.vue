<template>
  <router-link to="/">
      <button>Поточные шифры</button>
   </router-link>
   <router-link to="/RSA">
      <button>Ассиметричное шифрование</button>
   </router-link>
   <router-view/>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  align-items: center;
  display: flex;
  flex-direction: column;

}
a button {
   border: none; 
   outline: none;
   background: white;
   margin: 0px 20px 10px 20px;
   padding: 10px 15px;
   font-size: 18px;
   color: rgba(0,0,0,0.8);
   cursor: pointer;
   user-select: none;
}

a button:hover {
   color: white;
   box-shadow: 0 0 5px rgba(0,0,0,1);
   background: #2e38ef;
}

a.router-link-active button,
a button:active {
   color: white;
   box-shadow: 0 0 5px rgba(0,0,0,1);
   background: #161b75;
}
</style>
