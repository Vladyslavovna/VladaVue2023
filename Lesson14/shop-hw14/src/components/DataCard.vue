<template>
    <div class="product-card">
        <slot name="image">
            <img :src="data.image">
        </slot>
        <slot name="title">
            <h4>{{ data.title }}</h4>
        </slot>
        <slot name="price">
            <p>{{ data.price }}</p>
        </slot>
        <slot v-if="showAdvantages" name="advantages">
            <img :src="defaultImageSrc" />
            <img :src="data.advantages ?? defaultImageSrc" />
        </slot>
        <button>Купити</button>
    </div>
</template>

<script>
export default {
    name: "DataCard",

    props: {
        data: {
            type: Object,
            required: true
        },
        defaultImageSrc: {
            type: String,
            default:
                'https://w7.pngwing.com/pngs/831/723/png-transparent-computer-icons-truck-car-svg-angle-truck-car.png',
        },
        showAdvantages: {
            type: Boolean,
            default: true
        },
    },

}
</script>

<style lang="scss" scoped>
img {
    width: 150px;
}

.product-card {
    padding: 15px;
    border: 1px solid black;
    border-radius: 5px;
    width: 250px;
    margin: 10px;
}
</style>