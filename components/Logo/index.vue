<template>
  <div class="logo"><p>logo</p></div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Logo",
});
</script>
<style lang="scss" scoped>
.logo {
  background-color: #dc2626;
  width: 56px;
  height: 36px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  p {
    font-size: 14px;
  }
}
</style>
