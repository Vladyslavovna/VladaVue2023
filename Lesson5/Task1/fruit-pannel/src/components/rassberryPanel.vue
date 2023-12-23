<template>
	<div class="container">
		<rasberry-card v-for="rasberry in fruitsList" :key="rasberry.id" :fruit-data="rasberry" />
	</div>
</template>
   
<script>
   import RasberryCard from "./rasberryCard.vue";
   
   export default {
	name: 'rassberryPanel',
	components: {
  RasberryCard
	},
	props: {
  fruitsList: {
    type: Array,
    default: () => [],
  },
	},
   }
   </script>
   
   
<style lang="css" scoped>
.container{
	display: flex;
	justify-content: center;
}
</style>
  