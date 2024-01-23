<template>
    <div v-if="selectedCategoryId !== null">
        <div class="container">
            <product-item v-for="product in filteredProducts" :key="product.id" :product-data="product" />
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProductItem from './ProductItem.vue'
export default {
    name: "ProductsList",
    components: {
        ProductItem
    },
    computed: {
        ...mapGetters(['getProducts', 'getSelectedCategory']),
        filteredProducts() {
            return this.getProducts.filter(product => product.productCategory === this.getSelectedCategory)
        }
    },
    created() {
        this.loadProducts()
    },

    methods: {
        ...mapActions(['loadProducts', "loadSelectedCategory"]),
    },
}
</script>

<style lang="css" scoped>
.container{
    display: flex;
}
</style>