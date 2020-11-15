<template>
  <div class="home">
    <div>GETTER</div>
    <div>{{ fullName }}</div>
    <button @click="updateFullName">Setter</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data: () => ({
    firstName: "Bau",
    lastName: "Tran Duy",
  }),
  computed: {
    fullName: {
      get() {
        return this.firstName + " " + this.lastName;
      },
      set(newValue) {
        var names = newValue.split(" ");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      },
    },
  },
  methods: {
    updateFullName() {
      this.fullName = "Bau Cute";
    },
  },
};
</script>
