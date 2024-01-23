<template>
    <div class="product-card">
        <img :src="productData.image" class="product-image">
        <span class="product-model">{{ productData.model }}</span>
        <span class="product-price">{{ productData.price }}</span>
    </div>
</template>

<script>

export default {
    name: "ProductItem",
    props: {
        productData: {
            type: Object,
            required: true
        },
    },
}
</script>

<style lang="css" scoped>
.product-card {
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.product-image {
    width: 300px;
    height: 300px;

}
</style>