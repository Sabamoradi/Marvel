<template>
  <Home/>
</template>

<script lang="ts">
import Vue from 'vue'
import Home from '@/container/Home/index.vue'
export default Vue.extend({
  name: 'IndexPage',
  components:{
    Home
  }
})
</script>
