import { createURL } from "~/plugins/createUrl";
const resource = createURL('characters')


export default ($axios: { get: (arg0: string) => any; }) => ({
   getCharacters(){
    return $axios.get(resource)
  },
});
