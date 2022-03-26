export default class LocalStorage{
  static set(localName: any, data: any){
    const dataStringify = JSON.stringify(data)
    window.localStorage.setItem(localName, dataStringify)
  }

  static get(localName: any){
    const data = window.localStorage.getItem(localName)
    return JSON.parse(data)
  }

  static setTeam(localName: any, nameOfTeam: any){
    window.localStorage.setItem(localName, nameOfTeam)
  }
}