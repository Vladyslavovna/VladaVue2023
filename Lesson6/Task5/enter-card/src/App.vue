<template>
  <card-selector v-model:card.onlyNumbers.seperateNumbers.only16Numbers="curdNumberData"
    v-model:cardDate.digitsOnly.seperateSymbols.only4Numbers="expireCardData"
    v-model:cardCode.noSymbols.only3Numbers="cvvCode" />
</template>

<script>
import CardSelector from './components/CardSelector.vue'

export default {
  name: 'App',
  components: {
    CardSelector
  },
  data() {
    return {
      curdNumberData: null,
      expireCardData: null,
      cvvCode: null
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