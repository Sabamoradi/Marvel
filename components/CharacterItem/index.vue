<template>
  <div class="item_wrapper">
    <div class="item">
      <img :src="imgUrl" :alt="homeItem.name" />
      <div class="text">
        <p>
          {{ homeItem.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CharacterItem",
  props: {
    homeItem: {
      default: () => {},
      type: Object,
    },
  },
  computed: {
    imgUrl() {
      return `${this.homeItem.thumbnail.path}/portrait_medium.${this.homeItem.thumbnail.extension}`;
    },
  },
});
</script>
<style lang="scss" scoped>
.item_wrapper {
  min-width: 25%;
  padding: 16px 12px 0 12px;
  img {
    height: 470px;
    padding: 16px;
  }

  .text {
    padding: 16px;
  }
  .item {
    border: 1px solid #404244;
    border-radius: 16px;
    cursor: pointer;
  }
}
</style>
