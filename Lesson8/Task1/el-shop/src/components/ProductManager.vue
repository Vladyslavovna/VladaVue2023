<template>
    <div>
        <products-categories />
        <products-list />
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import ProductsCategories from './ProductsCategories.vue';
import ProductsList from './ProductsList.vue';

export default {
    name: "ProductManager",
    components: {
        ProductsCategories,
        ProductsList
    },

    created() {
        this.loadHeaders()
    },

    methods: {
        ...mapActions(['loadHeaders'])
    },
}
</script>

<style lang="scss" scoped></style>