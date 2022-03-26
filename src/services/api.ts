import axios from 'axios'

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
})

export default class ServicesPokemon{
  static async getPokemons(id: number | string) {
    return await api.get(`pokemon/${id}`).then(res => res.data)
  }
}