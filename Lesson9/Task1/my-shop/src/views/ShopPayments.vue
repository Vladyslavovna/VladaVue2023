<template>
    <div>
        <h2>Способи оплати</h2>
        <ul>
            <li>PayPal</li>
            <li>Visa</li>
            <li>MasterCard</li>
            <li>Записати у зошит</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "ShopPayments"
}
</script>

<style lang="scss" scoped>
li {
    list-style: none;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
}
</style>