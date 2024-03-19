<template>
    <div class="container">
        <data-card v-for="product in filteredProducts" :key="product.id" :showAdvantages="false" :data='{
            image: product.image,
            title: product.title,
            price: product.price
        }'>

        </data-card>
    </div>
</template>

<script>
import DataCard from './DataCard.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
    name: "ProductList",
    created() {
        this.resetFilter(); 
    },
    components: {
        DataCard
    },
    computed: {
        ...mapGetters(['getFilteredProducts']),
        filteredProducts() {
            return this.getFilteredProducts
        }
    },
    methods: {
        ...mapActions(['resetFilter']),
    },
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
}
</style>