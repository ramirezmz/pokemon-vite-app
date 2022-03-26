<template>
    <section class="create-container container-fluid">
        
        <div class="col-12 text-center">
            <h4 class="mt-2">Escolhe teus pokemons!</h4>
        </div>
        <div class="container-slots-general d-flex bg-success bg-opacity-10">
            <div class="slot-container 
                    container-fluid 
                    addPokeComponent 
                    d-flex
                    flex-row
                    justify-content-evenly
                    ">
        </div>
           
           <Card v-for:="pokemon in selectedPokemons" 
                    :pokemon="pokemon" 
                    :deleteButton="true"
                    v-on:pokemonId="deletePokemons"/>
        </div>
        <div class="pokemonList
                    border
                    m-auto
                    d-flex
                    flex-wrap
                    justify-content-around">

            <Card v-on:click="clickOnCard(index), hiddenCards" 
                  class="card-select" 
                  v-for:="(pokemon, index) in pokemonView" 
                  :key="pokemon.id" 
                  :pokemon="pokemon"
                  :deleteButton="false" />

        </div>
        <nav aria-label="Page navigation">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
               
                <li class="page-item"><a class="page-link" @click="nextPage()">Next</a></li>
            </ul>
        </nav>
    </section>
</template>

<script >
import LocalStorage from '../services/LocalStorage'
import configs from '../configs/configs'
import Card from '../components/Card.vue'

export default{
    components:{Card},
    data(){
        return{
            pokemonView: [],
            paginationLimit: 20,
            offset: 0,
            selectedPokemons: [],
            selected: false
        }
    },
    methods:{
        async controllerPagination(){
            const pokemonsList = await LocalStorage.get(configs.localStorage.pokemonList)
            for(let i = this.offset; i < this.paginationLimit * (this.offset+1); i++){
                this.pokemonView.push(pokemonsList[i])
            }
        },

        deletePokemons(pokemon){
            let index = this.selectedPokemons.indexOf(pokemon)
            this.selectedPokemons.splice(index, 1)
        },
        clickOnCard(index){
            if(!this.selectedPokemons.includes(this.pokemonView[index]) 
            &&
            this.selectedPokemons.length < configs.pokemons.limitSlot){
                this.selectedPokemons.push(this.pokemonView[index])
            }
        }
    },
    created(){
        this.controllerPagination()
    },
    watch:{
        pokemonView: (newValue, oldValue)=>{
            console.log(newValue)
            
        }
    }
}
</script>
<style scoped>
.create-container{
    width:70%;
}
.slot-container{
    height: 50%;
    width: 90%;
}
.card{
    min-width: 4rem;
    width:8rem;
    height:12rem;
    background-color: #393939;
    font-size: 4rem;
    color: #dedede;
    cursor: pointer
}
.card-select{
    cursor: pointer;
    width: 200px;
}
.card:hover{
    border: 1px dotted #0000ff
}
.pokemonList{
    width:100%;
    height:auto;
    background-color: #dedede;
}

</style>