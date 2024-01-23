<template>
    <div class="filter-container">
        <label>
            Категорія
            <select v-model="filters.category" @change="handleFilterChange">
                <option v-for="category in uniqueCategories" :key="category">
                    {{ category }}
                </option>
            </select>
        </label>

        <div class="filter-container">
            <label>Тип кузова</label>
            <label v-for="type in uniqueTypes" :key="type">
                <input type="checkbox" v-model="filters.type" :value="type" @change="handleFilterChange">
                {{ type }}
            </label>
        </div>

        <label>
            Модель
            <select v-model="filters.model" @change="handleFilterChange">
                <option v-for="model in uniqueModels" :key="model">
                    {{ model }}
                </option>
            </select>
        </label>
        <label>
            Марка
            <select v-model="filters.brand" @change="handleFilterChange">
                <option v-for="brand in uniqueBrands" :key="brand">
                    {{ brand }}
                </option>
            </select>
        </label>
    </div>
</template>
  
<script>
import { mapGetters, mapActions, mapState } from "vuex"
export default {
    name: "CarFilters",
    computed: {
        ...mapGetters(["getUniqueFilterVal"]),
        ...mapState(["filters"]),
        uniqueCategories() {
            return this.getUniqueFilterVal("category")
        },
        uniqueTypes() {
            return this.getUniqueFilterVal("type")
        },
        uniqueModels() {
            return this.getUniqueFilterVal("model")
        },
        uniqueBrands() {
            return this.getUniqueFilterVal("brand")
        },
    },
    watch: {
        filters: {
            handler: "handleFilterChange",
            deep: true,
            immediate: true,
        },
    },
    methods: {
        ...mapActions(["updateFilters"]),
        handleFilterChange() {
            this.updateFilters(this.filters)
            console.log('Filters: ', this.filters)
        },

    },
};
</script>
  
<style lang="css" scoped>
.filter-container {
    display: flex;
    flex-direction: column;
}
</style>
  