import characters from '~/service/characters'

export default ($axios, $http) => ({
  characters: characters($axios, $http),
})
