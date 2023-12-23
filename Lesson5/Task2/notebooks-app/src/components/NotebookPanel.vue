<template>
	<div>
		<notebook-card v-for="notebook in notebookArray " :key="notebook.id" :notebook-data="notebook" />
	</div>
</template>

<script>
import NotebookCard from './NotebookCard.vue';
	export default {
		name: 'NotebookPanel',
		components: {
			NotebookCard
		},
		props: {
			notebookArray: {
				type: Array,
				default: () => [],
			},
		},
	}
</script>

<style lang="scss" scoped></style>