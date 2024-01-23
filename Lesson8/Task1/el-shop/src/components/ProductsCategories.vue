<template>
    <div class="header-container">
        <div v-for="header in getHeaders" :key="header.id" @click="selectCategory(header.category)" :class="{'selected' : header.category === getSelectedCategory}" class="header-card">
            <img :src="header.image" alt="#" class="header-image">
            <h3>{{ header.title }}</h3>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: "ProductsCategories",
    computed: {
        ...mapGetters(['getHeaders','getSelectedCategory']),
    },

    methods: {
        ...mapActions(['loadSelectedCategory']),
        selectCategory(categoryId) {
            this.loadSelectedCategory(categoryId)
        }
    },
}
</script>

<style lang="css" scoped>
.header-container {
    display: flex;
    justify-content: space-between;
}

.header-card {
    width: 500px;
    cursor: pointer;
}
.selected{
    border: 2px solid rgb(94, 85, 160);
    border-radius: 6px;
}
.header-image {
    width: 300px;
    height: 300px;
}
</style>