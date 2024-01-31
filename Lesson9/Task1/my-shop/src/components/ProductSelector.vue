<template>
    <div class="product-container">
        <div v-for="product in filteredProducts" :key="product.id" class="product-block">
            <img :src="product.productImg" alt="#">
            <h4>{{ product.productName }}</h4>
            <span>{{ product.productPrice }} $</span>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
    name: "ProductSelector",
    computed: {
        ...mapGetters(['getProductsByCategory']),
        categoryId() {
            return this.$route.params.categoryId
        },
        filteredProducts() {
            return this.getProductsByCategory(this.categoryId)
        }
    },
}
</script>

<style lang="scss" scoped>
img {
    width: 300px;
    height: 250px;
}

.product-container {
    display: flex;
    justify-content: center;
}

.product-block {
    width: 400px;
    border: 1px solid black;
    border-radius: 6px;
    padding: 10px;
}
</style>