<template>
  <div class="layout">
    <Header />
    {{homedata}}
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  props:{
    homedata:{
      default:()=>[],
      type:Array
    }
  }
});
</script>
<style lang="css" scoped>
</style>
