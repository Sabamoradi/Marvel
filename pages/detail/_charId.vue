<template>
  <div class="wrapper">
    <div class="details_wrraper">
      <div class="container mx-auto pt-2">
        <Logo />

        <div class="detail_wrapper flex" v-if="character">
          <div class="img_wrapper">
            <img
              :src="`${character?.thumbnail.path}/portrait_medium.${character?.thumbnail.extension}`"
              :alt="character?.name"
            />
          </div>
          <div class="description">
            <p class="name">{{ character.name }}</p>
            <p class="details">{{ character.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="others container mx-auto" v-if="character">
      <h2>comics</h2>
      <div class="flex flex-wrap other_item">
        <CharacterItem
          v-for="(item, index) in comics"
          :key="`${index}comics`"
          :homeItem="item"
        />
      </div>
    </div>
    <div class="others container mx-auto" v-if="series">
      <h2>series</h2>
      <div class="flex flex-wrap other_item">
        <CharacterItem
          v-for="(item, index) in series"
          :key="`${index}series`"
          :homeItem="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Home from "@/container/Home/index.vue";
export default Vue.extend({
  name: "detail",
  components: {
    Home,
  },
  data() {
    return {
      character: null,
      comics: null,
      series: null,
    };
  },
  async fetch() {
    this.character = await this.getCharacterDetail();
    this.comics = await this.getCharacterComics();
    this.series = await this.getCharacterSeries();
  },
  methods: {
    async getCharacterDetail() {
      try {
        const response = await this.$services.characters.getCharacterData(
          this.$route.params.charId
        );
        return response.data.data.results[0];
      } catch (error) {
        console.log(error);
      }
    },
    async getCharacterComics() {
      try {
        const response = await this.$services.characters.getCharacterComics(
          this.$route.params.charId
        );
        return response.data.data.results;
      } catch (error) {
        console.log(error);
      }
    },
    async getCharacterSeries() {
      try {
        const response = await this.$services.characters.getCharacterSeries(
          this.$route.params.charId
        );
        return response.data.data.results;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
</script>
<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.details_wrraper {
  background: linear-gradient(90deg, #2c2e30 3%, #0e0e0e 80%);
  padding-bottom: 64px;
  .detail_wrapper {
    margin-top: 72px;
    color: $white;

    .img_wrapper {
      width: 240px;
      height: 240px;
      padding-right: 48px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .description{
      width: 60%;
    }
    .name {
      font-size: 32px;
      font-weight: 500;
    }
    .details {
      font-size: 14px;
    }
  }
}
.others {
  margin-top: 64px;
  flex-wrap: wrap;
  h2{
    color: $white;
    font-size: 24px;
    font-weight: 500;
  }
}
</style>