<template>
  <div>
    <h1>Montar Times</h1>
    <div class="col-12 text-center">
            <h4 class="mt-2">Qual será o nome do seu time?</h4>
            <div class="container-input">
            <input
            v-model="teamName"
            type="text"
            class="input-team"
            placeholder="Type the name of your team..."
        />
        <button class="btn btn-primary" @click="saveTeam(teamName)">
            Salvar
          </button>
        </div>
    </div>
    {{ teamName }}
  </div>
</template>
<script lang="ts" setup>
import LocalStorage from '../services/LocalStorage'
import configs from '../configs/configs'

const saveTeam = (name: string) => {

  LocalStorage.setTeam(configs.localStorage.team, name)
}

</script>