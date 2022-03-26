<template>
<div class="container-app">
  <Header />
  <Navbar />
  <router-view></router-view>
</div>
</template>
<script setup>
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import LocalStorage from './services/LocalStorage'
import configs from './configs/configs'
import Api from './services/api'
    (async function getPokemons(){
      const pokemons = []
      for(let i = 1; i<= configs.pokemons.limit; i++){
        await Api.getPokemons(i).then(response => pokemons.push(response))
      }
     LocalStorage.set(configs.localStorage.pokemonList, pokemons)
    })()

</script>
<style>
#container{
  background-color: #fdfdfd;
  min-height: 100vh;
}
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
  margin: 0%;
}
.container-app{
  
}
</style>
