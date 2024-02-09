<template>
    <div class="block">
        <label>
            Фільтрувати
            <input type="text" v-model="filterVal">
        </label>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: "UsersFilter",
    data() {
        return {
            filterVal: '',
        }
    },
    watch: {
        filterVal() {
            this.$store.dispatch('setFilter', this.filterVal)
        }
    },
    methods: {
        ...mapActions(['setFilter']),
    },
}
</script>

<style lang="scss" scoped>
.block {
    display: flex;

    justify-content: center;
}
</style>