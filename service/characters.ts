import { createURL } from "~/plugins/createUrl";
const apiBaseURL = "https://gateway.marvel.com/v1/public";

export default ($axios: { get: (arg0: string) => any; }) => ({
   getCharacters(){
    return $axios.get(`${apiBaseURL}/characters?${createURL()}`)
  },
  getCharacterData(characterId:number){
    return $axios.get(`${apiBaseURL}/characters/${characterId}?${createURL()}`)
  },
});
