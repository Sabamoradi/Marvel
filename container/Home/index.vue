<template>
  <div class="layout">
    <Header />
    <div class="container mx-auto flex item_container">
      <CharacterItem
        v-for="item in homedata"
        :key="item.id"
        :homeItem="item"
        @click.native="detailPage(item.id)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  props: {
    homedata: {
      default: () => [],
      type: Array,
    },
  },
  methods: {
    detailPage(id: number) {
      this.$router.replace({
        path: `/detail/${id}`,
      });
      console.log(this.$router);
    },
  },
});
</script>
<style lang="css" scoped>
.item_container {
  flex-wrap: wrap;
}
</style>
