<template>
	<div class="container">
		<notebook-panel :notebook-array="notebooksList" />
	</div>
</template>

<script>
import NotebookPanel from './components/NotebookPanel.vue'
import {notebooksList} from './constants/3_data_notebooks.js'
export default {
  name: 'App',
  components: {
	NotebookPanel
  },
  data() {
    return {
 notebooksList
    }
  }
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	.container{
		display: flex;
		align-items: center;
		justify-content: center;
	}

}
</style>
