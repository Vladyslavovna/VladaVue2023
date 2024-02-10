<template>
    <div class="block">
        <label>
            Фільтрувати
            <input v-model="filterVal" type="text" >
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
        filterVal: {
            handler(newVal) {
                this.setFilter(newVal)
            },
            deep: true
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