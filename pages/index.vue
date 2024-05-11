<template>
  <div>
    <Home :homedata="characters" />
    <Pagination v-if="pageItem" :pageItem="pageItem" :count="count" :limit="limit" @changePage="getCharacters"/>
  </div>
</template>

<script>
import Vue from "vue";
import Home from "@/container/Home/index.vue";
export default Vue.extend({
  name: "IndexPage",
  components: {
    Home,
  },
  data() {
    return {
      characters: null,
      pageItem:null,
      limit:20,
      count:0
    };
  },
  async created() {
    this.characters = await this.getCharacters();
  },
  methods: {
    async getCharacters(value) {
      let search = this.$route.query.s
      try {
        const response = await this.$services.characters.getCharacters(value,search);
        this.pageItem = response.data.data.total
        this.count = response.data.data.limit
        return response.data.data.results;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
</script>
