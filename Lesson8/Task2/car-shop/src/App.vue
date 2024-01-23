<template>
  <car-selector />
</template>

<script>
import CarSelector from './components/CarSelector.vue';
export default {
  name: "App",
  components: {
    CarSelector
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
