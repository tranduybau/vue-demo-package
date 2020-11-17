<template>
  <div class="home">
    <div>Dữ liệu localStorage hiện tại: {{ store }}</div>
    <button @click="setValue">Update value</button>
  </div>
</template>

<script>
import localStorage from "@/plugins/localStorage";

export default {
  name: "Home",
  data: () => ({
    store: localStorage.get()
  }),
  watch: {
    store() {
      localStorage.set(this.store);
    }
  },
  methods: {
    setValue() {
      return (this.store += 1);
    }
  }
};
</script>
