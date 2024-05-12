<template>
  <div class="item_wrapper">
    <div class="item">
      <div class="img_wrapper">
        <img
          :src="`${this.homeItem.thumbnail.path}/portrait_medium.${this.homeItem.thumbnail.extension}`"
          :alt="homeItem.name"
        />
      </div>
      <div class="text">
        <p>
          {{ title }}
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
    title() {
      if (this.homeItem.name) {
        return this.homeItem.name;
      } else {
        return this.homeItem.title;
      }
    },
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
.item_wrapper {
  min-width: 25%;
  padding: 16px 12px 0 12px;
  .img_wrapper {
    height: 470px;
    padding: 16px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .text {
    padding: 16px;
    color: $white;
  }
  .item {
    border: 1px solid $blue-04;
    border-radius: 16px;
    cursor: pointer;
  }
}
</style>
