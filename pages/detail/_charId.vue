<template>
 <div>
  aaaaaa
 </div>
</template>

<script>
import Vue from 'vue'
import Home from '@/container/Home/index.vue'
export default Vue.extend({
  name: 'detail',
  components:{
    Home
  },
  data(){
    return{
      character:null
    }
  },
  async created(){
    this.character = await this.getCharacterDetail()
    console.log(this.character);

  },
  methods:{
    async getCharacterDetail() {
      try {
        const response = await this.$services.characters.getCharacterData(this.$route.params.charId)
        console.log(response.data);
        
      } catch (error) {
        console.log(error);
      }
    },
  }
})
</script>
