<template>
	<div>
		<div class="card-wrap">
			<img class="bg-image" :src='fruitData.imgSrc' alt="#">
			<div class="card-about">
				<img :src="fruitData.logo" alt="logo">
				<span>{{ fruitData.companyTitle }}</span>
				<span class="in-stock">В наявності</span>
			</div>
			<p class="text">{{ fruitData.description }}</p>
		</div>
	</div>
</template>

<script>
	export default {

		name: 'rasberryCard',

		props: {
			fruitData:{
				type: Object,
				default: () => ({})
				
			}
		}
		
	}

</script>

<style lang="css" scoped>
.card-wrap {
	width: 300px;
	height: 300px;
	position: relative;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.card-about{
	display: flex;
	justify-content: center;
	margin-bottom: 10px;
	cursor: pointer;
}
	


.text{
	margin: 0 auto;
}

.in-stock{
	font-weight: 600;
	color: green;
	margin-left: 15px;
}

.bg-image {
	width: 100%;
	height: 100%;
	border-radius: 30px;
	margin-bottom: 10px;
}


</style>