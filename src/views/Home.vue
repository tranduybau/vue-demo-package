<template>
  <div class="home">
    <div>Dữ liệu localStorage hiện tại: {{ valueLocalStorage }}</div>
    <button @click="setValue">Update value</button>
  </div>
</template>

<script>
// @ is an alias to /src
import localStorage from "@/plugins/localStorage";

export default {
  name: "Home",
  computed: {
    valueLocalStorage() {
      return Number(localStorage.get());
    }
  },
  methods: {
    setValue() {
      return localStorage.set(this.valueLocalStorage + 1);
    }
  }
};
</script>
