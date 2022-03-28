<template>
  <div class="container_app container">
    <div class="">
      <div class="container">
        <!-- INPUT -->
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
            <input v-model="search" type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1">
        </div>

        <div class="row ">
          <div class="card_pokemon_container col-2 border border-1" v-for="pokemon in filterPokemons" :key="pokemon.name">
           <div class="card_pokemon card" @click="showPokemon(getId(pokemon))">
             <p>{{getId(pokemon)}}</p>
             <div class="container_pokemon container">
                <div class="container_image_pokemon container row mx-0">
                  <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${getId(pokemon)}.svg`" :alt="pokemon.name" class="container_image container p-3"/> 
                </div>
                <div class="pokemon_info ">
                  <h2 class="pokemon_name">
                  {{pokemon.name}}
                </h2>
                </div>
             </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Modal :open="show_dialog" @close="show_dialog=!show_dialog">
    <div class="card_pokemon_details_container card" v-if="selected_pokemon">
      <!-- <h2>{{selected_pokemon}}</h2> -->
      <div class="cartao-pokemon aberto" :class= 'selected_pokemon.types[0].type.name'  id="cartao-pikachu">
            <div class="cartao-topo">
              <div class="detalhes">
                <h2 class="nome">{{selected_pokemon.name}}</h2>
                <span>#{{selected_pokemon.id}}</span>
              </div>

              <span class="tipo" v-for="type in selected_pokemon.types" :key="type.slot">{{type.type.name}}</span>

              <div class="cartao-imagem">
                <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${selected_pokemon.id}.svg`" :alt="selected_pokemon.name" class="container_image_detalhe container p-3"/>
              </div>
            </div>

            <div class="cartao-informacoes">
              <div class="status">
                <h3>Status</h3>

                <ul>
                  <li>HP: {{selected_pokemon.stats[0].base_stat}}</li>
                  <li>Ataque: {{selected_pokemon.stats[1].base_stat}}</li>
                  <li>Defesa: {{selected_pokemon.stats[2].base_stat}}</li>
                  <li>Especial: {{selected_pokemon.stats[3].base_stat}}</li>
                  <li>Velocidade: {{selected_pokemon.stats[5].base_stat}}</li>
                </ul>
              </div>

              <div class="habilidades">
                <h3>Habilidades</h3>
                <ul v-if="selected_pokemon.abilities.length >= 2">
                  <li v-for="abilidade in selected_pokemon.abilities" :key="selected_pokemon.abilities">{{abilidade.ability.name}}</li>

                </ul>
              </div>
            </div>
          </div>
    </div>
  </Modal>
</template>
<script lang="ts">
import axios from "axios"
import Modal from "../components/Modal.vue"

export default {
  name: "App",
  components: {
    Modal
  },
  data() {
    return {
      pokemons: [],
      search: '',
      show_dialog: false,
      selected_pokemon: null,
      type_color: ''
    }
  },
  mounted() {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151").then((response) => {
      this.pokemons = response.data.results
    })
  },
  methods: {
    getId(pokemon: number) {
      return Number(pokemon.url.split('/')[6])
    },
    showPokemon(id: Number) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
      this.selected_pokemon = response.data
      this.show_dialog=true
    })
    }
  },
  computed: {
    filterPokemons() {
      return this.pokemons.filter((item) => {
        return item.name.includes(this.search)
      })
    }
  }
}
</script>

<style>
#app {
  background: linear-gradient(
      to bottom right,
      rgb(255, 255, 255),
      rgb(98, 139, 175)
    )
    no-repeat center center fixed !important;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover !important;
  background-position: center;
  min-height: 100vh;
}
.card_pokemon_container{
  width: 18rem;
  height: 19rem;
  background-color: aqua;
  padding: 3px;
  margin-inline: initial;
}
.container_pokemon{
  width: 18rem;
  height: 16rem;
}

.container_image_pokemon {
  width: 15rem;
  height: 12rem;
}

.container_image{
  width: 15rem;
  height: 12rem;
}
.pokemon_info{
  text-align: center;
  height: 2rem;
  margin: 5px;
}
h2{
  font-size: 20px;
}


.cartao-pokemon {
    display: none;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 10px;
}

.cartao-pokemon .cartao-topo {
    padding: 30px 40px 0;
}

.cartao-pokemon .nome {
    margin-bottom: 5px;
}

.cartao-pokemon .tipo {
    font-size: 12px;
    background-color: #FFFFFF;
    opacity: 0.7;
    border-radius: 10px;
    padding: 2px 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    
}

.tipo{
  margin-right: 3px;
}
.cartao-pokemon .detalhes {
    color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}

.cartao-pokemon .cartao-imagem {
    width: 350px;
    height: 350px;
}

.cartao-imagem {
  margin-left: 80px;
}

.cartao-pokemon img {
    max-height: 100%;
}

.cartao-pokemon .cartao-informacoes {
    display: flex;
    justify-content: space-between;
    background-color: #FFFFFF;
    padding: 80px 30px 50px;
    margin-top: -70px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}

.cartao-pokemon .cartao-informacoes h3 {
    font-size: 20px;
    margin-bottom: 15px;
    border-bottom: 1px solid #6B727A;
}

.cartao-pokemon .cartao-informacoes .status, .cartao-pokemon .cartao-informacoes .habilidades {
    padding: 0 10px;
    width: 180px;
}

.cartao-pokemon .cartao-informacoes .habilidades ul li, .cartao-pokemon .cartao-informacoes .status ul li {
    border-bottom: 1px solid #C3C4C5;
    padding: 0 0 5px;
    margin-bottom: 5px;
    font-size: 15px;
}

.cartao-pokemon.aberto {
    display: block;
}

.fire {
    background-color: #ED8A8B;
}

.electric {
    background-color: #FCC719;
}

.water {
    background-color: #76BEFE;
}

.grass {
    background-color: #49D0B0;
}

.poison {
    background-color: #BA68C8;
}

.tipo-dragao {
    background-color: #C29791;
}

.ground {
  background-color: #8a6d5a;
}

.bug {
  background-color: #c5e48c;
}

.normal {
  background-color: #f5a7b4;
}

.fairy {
  background-color: #ffe0ce;
}

.fighting {
  background-color: #f75540;
}

.ice {
  background-color: #7bf8d3;
}

.psychic {
  background-color: #9658fc;
}

.dragon {
  background-color: #616e79;
}

.rock {
  background-color: #523715;
}
</style>
