<template>
	<rassberry-panel :fruits-list="raspberryList" />
   </template>
   
   <script>
   import rassberryPanel from './components/rassberryPanel.vue';
   import { raspberryList } from './constants/data_rasberry';
   
   export default {
	name: 'App',
	components: {
  rassberryPanel,
	},
	data() {
 return {
  raspberryList,
  }
	},
   };
   </script>
   

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;

}
</style>
