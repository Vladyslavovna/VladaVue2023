<template class="container">
    <div v-for="category in getCategoristList" :key="category.id" class="category-block"
        @click="routToProduct(category.categoryId)">
        {{ category.categoryName }}
    </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
    name: "ShopPage",
    emits: ["routToProduct"],
    computed: {
        ...mapGetters(['getCategoristList'])
    },

    methods: {
        routToProduct(categoryId) {
            this.$router.push({
                name: "product",
                params: { categoryId }
            })
        }
    },
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
}

.category-block {
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
}
</style>