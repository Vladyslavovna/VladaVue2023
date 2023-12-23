<template>
  <email-input v-model:email.check="userData" />
  <!-- в мене є проблема,що при натисканнi backspace воно рахується як символ i додає домен)пiдкажiть будь ласка як виправити.дякую -->
</template>

<script>
import EmailInput from './components/EmailInput.vue';

export default {
  name: 'App',
  components: {
    EmailInput
  },
  data() {
    return {
      userData: ''
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
