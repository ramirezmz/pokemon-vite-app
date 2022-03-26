import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/listagempokemons',
    name: 'listagempokemons',
    component: () => import(/*webpackChunckName*/'../views/listagemPokemons.vue')
  },
  {
    path: '/detalhePokemon',
    name: 'detalhePokemon',
    component: () => import(/**webpackChunckName */'../views/detalhePokemon.vue')
  },
  {
    path: '/gerenciamentotimes',
    name: 'gerenciamentotimes',
    component: () => import(/**webpackChunckName */'../views/gerenciamentoTimes.vue')
  },
  {
    path: '/montagemtime',
    name: 'montagemtime',
    component: () => import(/**webpackChunckName */'../views/montagemTime.vue')
  }

]
const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active-status'
})

export default router