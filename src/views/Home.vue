<template>
  <div class="home">
    <div>Dữ liệu localStorage hiện tại: {{ count }}</div>
    <button @click="setValue">Update value</button>
  </div>
</template>

<script>
// @ is an alias to /src
import localStorage from "@/plugins/localStorage";
import { mapActions, mapState } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState("localStorage", ["count"]),
    valueLocalStorage() {
      return Number(localStorage.get());
    }
  },
  methods: {
    setValue() {
      this.incrementLocalCount();
    },
    ...mapActions("localStorage", ["incrementLocalCount"])
  }
};
</script>
