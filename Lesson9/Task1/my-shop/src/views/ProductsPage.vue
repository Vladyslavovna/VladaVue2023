<template>
    <div>
        <product-selector :category-id="categoryId" />
    </div>
    <div>
        <button @click="onBack()">Назад</button>
        <button @click="onHome()">На головну</button>
    </div>
</template>

<script>
import { mapActions } from "vuex"
import ProductSelector from "@/components/ProductSelector.vue";

export default {
    name: "ProductsPage",

    components: {
        ProductSelector
    },
    computed: {
        categoryId() {
            return this.$route.params.categoryId
        }
    },
    created() {
        this.loadProductsList();
    },
    methods: {
        ...mapActions(['loadProductsList']),
        onBack() {
            this.$router.push({
                name: 'shop',
            })
        },
        onHome() {
            this.$router.push({
                name: 'home',
            })
        }
    },
}
</script>

<style lang="scss" scoped></style>