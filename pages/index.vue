<template>
  <div>
    <Home :homedata="characters" />
    <Pagination
      v-if="pageItem"
      :pageItem="pageItem"
      :count="count"
      :limit="limit"
      @changePage="getCharacters"
    />
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
      pageItem: null,
      limit: 20,
      count: 0,
      offset: 0,
    };
  },
  async fetch() {
    this.characters = await this.getCharacters();
  },
  methods: {
    async getCharacters(value) {
      let search = this.$route.query.s;
      this.offset = value ? this.offset + this.count : 0;
      try {
        const response = await this.$services.characters.getCharacters(
          this.offset,
          search
        );
        this.pageItem = response.data.data.total;
        this.count = response.data.data.limit;
        console.log(this.count);
        return response.data.data.results;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
</script>
