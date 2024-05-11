<template>
  <div class="item_wrapper">
    <div class="item">
      <img :src="homeItem.thumbnail.path" :alt="homeItem.name" />
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
});
</script>
<style lang="css" scoped>
.item_wrapper {
  min-width: 25%;
  padding: 0 12px;
  
}
.item_wrapper img{
    height: 470px;

}
.item_wrapper{
    padding-top: 16px;
}
.text{
    padding: 16px;
}
.item{
    border: 1px solid #404244;
    border-radius: 16px;
}
</style>
