<template>
    <div class="card_container col-2 border border-secondary overflow-hidden p-2 m-2 rounded-3">
      <h2 class="card-title h2 fs-4 text-center text-uppercase border-light border">{{pokemon.forms[0].name}}</h2>
      <div class="card-typeof d-flex border border-secondary rounded-pill ms-1">
        <p v-for:="types in pokemon.types" class="card-subtitle p-1">{{types.type.name}}</p>
      </div>
      <hr>
      <div >
        <div class="pokemons_escolhidos">
        <img class="card-image p-3 img-fluid border-light rounded" :src="pokemon.sprites.other.dream_world.front_default" />
      </div>
      <div class="button-options d-flex">
        <button v-if:="!!deleteButton" v-on:click="deleteCard(pokemon)" class="btn btn-danger">Deletar</button>
        <button class="btn btn-info" @click="detailsButton(pokemon.id)">Info</button>
      </div>
    </div>
  </div>

</template>
<script >
import LocalStorage from '../services/LocalStorage'
import configs from '../configs/configs'
import PopUp from '../components/PopUp.vue'
import {ref} from 'vue'
export default {
  name: 'Card',
  setup(){

  },
  props: {
    pokemon:{
      type: Object,
      required: true
    },
    deleteButton:{
      type: Boolean,
      required: false,
      default: false
    },
    infoButton:{
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods:{
    deleteCard(name){
      this.$emit('pokemonId', name)
    },
    detailsButton(pokeID){
     const idPokemon = pokeID - 1
     const pegaPokemon = LocalStorage.get(configs.localStorage.pokemonList)
    console.log(pegaPokemon[idPokemon])
    }
  }
}
</script>

<style scoped>
  .card-image {
    height: 180px;
  }
  .button-options{
    justify-content: space-evenly;
  }
</style>