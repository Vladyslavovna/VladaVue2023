<template>
    <div>
        <info-master-page>
            <h1>
                Наші контакти
            </h1>
            <ul>
                <li>
                    Адреса : м. Київ, вул. Львівська, 1
                </li>
                <li>
                    Телефон : 123-456-789
                </li>
                <li>
                    Email : 0TqX9@example.com
                </li>
            </ul>
        </info-master-page>
    </div>
</template>

<script>
import InfoMasterPage from '@/masterpages/InfoMasterPage.vue';
export default {
    name: "ContactsView",
    components: {
        InfoMasterPage,
    },
}
</script>

<style lang="scss" scoped></style>