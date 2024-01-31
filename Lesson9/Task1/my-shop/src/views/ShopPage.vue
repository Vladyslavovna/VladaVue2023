<template>
    <div>
        <categories-selector />
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import CategoriesSelector from '@/components/CategoriesSelector.vue'

export default {
    name: "ShopPage",
    components: {
        CategoriesSelector
    },
    created() {
        this.loadCategoriesList()
    },
    methods: {
        ...mapActions(['loadCategoriesList'])
    }
}
</script>

<style lang="scss" scoped></style>