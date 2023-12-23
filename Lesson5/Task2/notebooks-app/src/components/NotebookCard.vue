<template>
	<div>
		<div class="card-wrap">

			<img :src="notebookData.imgSrc" alt="#">

			<div class="card-about">

				<a :href="notebookData.link">
					<h3>{{ notebookData.title }}</h3>
				</a>

				<span class='card-econom'>Ваша єкономія
					<span class="card-strong"> {{ notebookData.discount }} ₴</span>

				</span>

				<s class="card-old">{{ notebookData.oldPrice }} ₴</s>

				<div class="card-bottom">
					<span class="card-newprice">{{ notebookData.price }} ₴</span>

					<button type="button">Купити</button>
				</div>


			</div>

		</div>
	</div>
</template>

<script>
	export default {
		name: 'NotebookCard',
		props: {
			notebookData:{
				type: Object,
				default: () => ({})
			},
		},
	}
</script>

<style lang="css" scoped>
img {
	width: 350px;
	height: 300px;
}

a {
	text-decoration: none;
}

button{
	border: none;
	background-color: green;
	color: white;
	padding: 10px 15px;
	border-radius: 5px;
	cursor: pointer;
	text-align: center;
}

.card-wrap {
	display: flex;
	border: 1px solid rgb(174, 166, 166);
	border-radius: 16px;
	padding: 15px 20px;
	margin-bottom: 30px;
	width: 700px;
}

.card-econom {
	margin-bottom: 15px;
}
.card-old{
	color: gray;
	margin-bottom: 15px;
}

.card-strong {
	color: red;
	font-weight: 700;
}
.card-bottom{
	display: flex;
	justify-content: space-between;
}

.card-newprice{
	font-weight: 800;
	color: rgb(255, 31, 31);
	font-size: 20px;
}

.card-about {
	display: flex;
	flex-direction: column;
}
</style>