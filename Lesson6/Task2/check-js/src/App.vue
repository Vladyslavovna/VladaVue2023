<template>
  <check-data v-model:link.checkPath="userLink" title="Enter your js path" />
</template>

<script>
import CheckData from './components/CheckData.vue'

export default {
  name: 'App',
  components: {
    CheckData
  },
  data() {
    return {
      userLink: null
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
