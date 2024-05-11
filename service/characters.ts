import { createURL } from "~/plugins/createUrl";
const apiBaseURL = "https://gateway.marvel.com/v1/public";

export default ($axios: { get: (arg0: string) => any; }) => ({
   getCharacters(value:number){
    let limit = value ? `&limit=${value}` :''
    return $axios.get(`${apiBaseURL}/characters?${createURL()}${limit}`)
  },
  getCharacterData(characterId:number){
    return $axios.get(`${apiBaseURL}/characters/${characterId}?${createURL()}`)
  },
});
