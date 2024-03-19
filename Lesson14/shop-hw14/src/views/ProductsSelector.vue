<template>
    <div>
        <input type="text" v-model="filterName" @input="filterProducts">
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: "ProductsSelector",
    data() {
        return {
            filterName: ''
        }
    },
    methods: {
        ...mapActions(['filterProductByName']),
        filterProducts() {
            this.filterProductByName(this.filterName)
            console.log(this.filterName);
        }
    }
}
</script>

<style lang="scss" scoped></style>
