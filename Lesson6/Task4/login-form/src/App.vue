<template>
  <login-selector v-model:login.uppercase="userLogin"
    v-model:userAge.numbersOnly.twoNumbers.setColor="userData"  
   />
</template>

<script>
import LoginSelector from './components/LoginSelector.vue'

export default {
  name: 'App',
  components: {
    LoginSelector
  },

  data() {
    return {
      userLogin: '',
      userData: '',

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
