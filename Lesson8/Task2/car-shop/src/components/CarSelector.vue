<template>
    <div class="container">
        <car-items />
        <car-filters />
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import CarItems from './CarItems.vue';
import CarFilters from './CarFilters.vue';

export default {
    components: { CarItems, CarFilters },

    created() {
        this.loadCarList()
    },
    methods: {
        ...mapActions(['loadCarList']),
    },

}
</script>

<style lang="css" scoped>
.container {
    display: flex;
    justify-content: space-between;
}
</style>
