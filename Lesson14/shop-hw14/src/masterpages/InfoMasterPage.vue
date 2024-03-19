<template>
    <div>
        <nav>
            <router-link to="/">На головну </router-link> |
        </nav>
        <slot></slot>
        <footer>
            <h3>Галерея</h3>
            <div>
                💙💛🌸🌷
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "InfoMasterPage",
    }
</script>

<style lang="scss" scoped>

</style>