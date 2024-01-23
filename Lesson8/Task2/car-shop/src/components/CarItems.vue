<template>
    <div>
        <div v-for="car in filteredList" :key="car.id" class="car-card">
            <img :src="car.image" alt="#">
            <div class="car-info">
                <span>Модель:{{ car.model }}</span>
                <span>Марка:{{ car.brand }}</span>
                <span>Тип:{{ car.type }}</span>
                <span> Ціна ${{ car.price_usd }}</span>
                <span>Ціна грн:{{ car.price_uah }}</span>
                <span>Об'єм двигуна:{{ car.mileage }}</span>
                <span>Обєм палива:{{ car.fuel_capacity }}</span>
                <span>Місто:{{ car.city }}</span>
                <span>Передача:{{ car.transmission }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
    name: "CarItems",

    computed: {
        ...mapGetters(["getFilteredCarList"]),
        filteredList() {
            return this.getFilteredCarList
        }
    },
}
</script>

<style lang="css" scoped>
img {
    width: 400px;
    height: 300px;
}

.car-card {
    padding: 50px;
    display: flex;
    align-items: center;
}

.car-info {
    display: flex;
    flex-direction: column;
}
</style>