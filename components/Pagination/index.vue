<template>
  <nav
    aria-label="Page navigation example"
    class="mt-5 flex justify-center align-center"
  >
    <ul class="inline-flex -space-x-px text-sm">
      <li @click="prev">
        <div

          class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >Previous</div
        >
      </li>
      <li>
        <a
          href="#"
          class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >{{ showNumber }}</a
        >
      </li>
      <li @click="next">
        <div
          class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </div>
        >
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Pagination",
  props: {
    pageItem: {
      default: 0,
      type: Number,
    },
    limit: {
      default: 0,
      type: Number,
    },
    count:{
      default: 0,
      type: Number,
    }
  },
  data() {
    return {
      items: 0,
      showNumber: 1,
      serverLimit:0,
      
    };
  },
  mounted() {
    this.calculatePageItem();
  },
  methods: {
    calculatePageItem() {
      this.items = Math.ceil(this.pageItem / this.limit);
    },
    prev() {
      if (this.showNumber === 1) {
        return;
      } else {
        this.showNumber = this.showNumber - 1;
        this.serverLimit = this.count - 20
        this.$emit('changePage',this.serverLimit)
      }
    },
    next() {
      if (this.showNumber === this.items) {
        return;
      } else {
        this.showNumber = this.showNumber + 1;
        this.serverLimit = this.count + 20
        this.$emit('changePage',this.serverLimit)
      }
    },
  },
});
</script>
<style lang="css" scoped>
</style>

