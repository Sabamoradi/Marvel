<template>
  <div class="header_container">
    <div class="container mx-auto">
      <div class="logo"><p>logo</p></div>
      <div
        class="flex items-center justify-between input_wrapper mt-12 mb-5 relative"
      >
        <input
          type="search"
          id="default-search"
          class="p-4 w-10/12 text-sm text-gray-900 bg-dark-50 rounded-lg border border-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search for characters..."
          v-model="value"
          required
        />
        <button
          type="submit"
          class="text-white w-1/12 flex items-center justify-between btn-bg focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="search"
        >
          <div class="flex inset-y-0 left-0 items-center pointer-events-none">
            <svg
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <p>Search</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    search() {
      if (this.value.length === 0) {
        this.$router.push(`/`);
      } else {
        this.$router.push(`/?s=${this.value}`);
      }
    },
  },
});
</script>


<style lang="scss" scoped>
.header_container {
  padding: 10px 0;
  background: linear-gradient(90deg, #2c2e30 3%, #0e0e0e 80%);
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
  .btn-bg {
    background-color: #dc2626;
  }
  .input_wrapper {
    background-color: #35383b;
    border-radius: 8px;
    padding: 16px;
  }
}
</style>
