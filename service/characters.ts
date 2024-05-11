import { createURL } from "~/plugins/createUrl";
const apiBaseURL = "https://gateway.marvel.com/v1/public";

export default ($axios: { get: (arg0: string) => any; }) => ({
   getCharacters(value:number,search:string){
    let limit = value ? `&limit=${value}` :''
    let serach = search ? `&name=${search}` :''
    return $axios.get(`${apiBaseURL}/characters?${createURL()}${limit}${serach}`)
  },
  getCharacterData(characterId:number){
    return $axios.get(`${apiBaseURL}/characters/${characterId}?${createURL()}`)
  },
});
