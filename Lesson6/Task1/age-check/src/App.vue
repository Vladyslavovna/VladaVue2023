<template>
  <custom-input v-model:age.check.setColor="userAge" title="Enter your age" />
</template>

<script>
import CustomInput from './components/CustomInput.vue';

export default {
  name: 'App',
  components: {
    CustomInput
  },
  data() {
    return {
      userAge: null
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
