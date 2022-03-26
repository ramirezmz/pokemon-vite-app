export default class Team{
  constructor(name: string, pokemons:any = [], updatedAt: any){
    this.name = name
    this.pokemons = pokemons
    this.createAt = new Date('now')
    this.updatedAt = updatedAt
  }
}