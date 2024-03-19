<template>
    <div class="container">
        <data-card v-for="owner in getOwnersList" :key="owner.id" :data='{
            image: owner.image,
            title: owner.title,
            advantages: owner.advantages
        }'>
        </data-card>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DataCard from './DataCard.vue'
export default {
    name: "OwnersList",
    components: {
        DataCard
    },
    computed: {
        ...mapGetters(['getOwnersList'])
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: space-around;
}
</style>