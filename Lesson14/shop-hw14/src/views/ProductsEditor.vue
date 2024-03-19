<template>
    <div>
        <h4>Додайте новий товар:</h4>
        <input type="text" v-model="title">
        <input type="text" v-model="image">
        <input type="text" v-model="price">
        <button @click="addProducts">Додати</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: "ProductsEditor",
    methods: {
        ...mapActions(['addProduct']),
        addProducts() {
            this.addProduct({ title: this.title, image: this.image, price: this.price })

        }
    },
}
</script>

<style lang="scss" scoped></style>