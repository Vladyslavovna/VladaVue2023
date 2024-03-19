<template>
    <div>
        <nav>
            <router-link to="/"> Головна </router-link> |
            <router-link to="/products"> Товари </router-link>
            <router-link to="/owners"> Власники </router-link>
            <router-link to="/contacts"> Контакти </router-link>
            <router-link to="/shopping-rules"> Правила магазину </router-link>
        </nav>

        <slot></slot>

        <footer>
            <slot name="rating">
                <h1>Рейтинг магазину : 55419</h1>
            </slot>
            <slot name="status">
                <h1>Власник магазину : Баба галя</h1>
            </slot>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'MainPasterpage',
}
</script>

<style lang="scss" scoped></style>