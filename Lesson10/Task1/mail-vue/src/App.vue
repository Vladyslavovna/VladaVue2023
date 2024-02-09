<template>
  <users-manager />
</template>

<script>

import UsersManager from "./components/UsersManager.vue";

export default {
  name: "App",
  components: {
    UsersManager
  },
};
</script>

<style lang="scss">
template {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
