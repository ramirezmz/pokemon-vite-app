<template>
<input type="text" v-model="pokemonName">
<button class="btn btn-primary" @click="searchPokemon(pokemonName)">Search</button>
    <p>{{ pokemonName }}</p>
  <div class="container">
    <div class="container-pokemon">
      <CardDetail />
    </div>
  </div>
</template>
<script setup>
import CardDetail from '../components/CardDetail.vue'
import Api from '../services/api'
import {ref} from 'vue'
const pokemonName = ref('')
</script>

<style scoped>
.container{
  min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #DADFE8;
}

</style>