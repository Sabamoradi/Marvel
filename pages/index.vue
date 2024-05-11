<template>
  <Home :homedata="characters"/>
</template>

<script>
import Vue from 'vue'
import Home from '@/container/Home/index.vue'
export default Vue.extend({
  name: 'IndexPage',
  components:{
    Home
  },
  data(){
    return{
      characters:null
    }
  },
  async created(){
    this.characters = await this.getCharacters()
    
    console.log('aaaaa',this.characters);
  },
  methods:{
    async getCharacters() {
      try {
        const response = await this.$services.characters.getCharacters()
        console.log(response.data);
        return response.data.data.results
        
      } catch (error) {
        console.log(error);
      }
    },
  }
})
</script>
