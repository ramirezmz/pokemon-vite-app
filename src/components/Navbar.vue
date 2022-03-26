<template>
  <nav>
    <ul class="list-unstyled d-flex justify-content-evenly">
      <li>
        <router-link to='/' class="link">Home Page</router-link>
      </li>
      <li>
        <router-link to='/montagemtime' class="link">Monta teu time</router-link>
      </li>
      <li>
        <router-link to='/listagempokemons' class="link">Escolhe pokemons</router-link>
      </li>
      <li>
        <router-link to='/gerenciamentotimes' class="link">Lista de times</router-link>
      </li>
      <li>
        <router-link to='/detalhePokemon' class="link">Detalhes Pokemon</router-link>
      </li>
      
    </ul>
  </nav>
</template>
<style scoped>
.link{
   box-shadow: inset 0 0 0 0 #54b3d6;
  color: #54b3d6;
  margin: 0 -.25rem;
  padding: 0 .25rem;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
  text-decoration: none;
}
.link:hover{
  box-shadow: inset 170px 0 0 0 #54b3d6;
  color: white;
}
</style>