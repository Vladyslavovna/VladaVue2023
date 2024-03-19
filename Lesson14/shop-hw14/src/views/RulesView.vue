<template>
    <div>
        <info-master-page>
            <h1>Правила</h1>
            <ul>
                <li>
                    Не використовувати ботів
                </li>
                <li>
                    Не спамити
                </li>
                <li>
                   Повернення немає
                </li>
            </ul>
        </info-master-page>
    </div>
</template>

<script>
import InfoMasterPage from '@/masterpages/InfoMasterPage.vue';
export default {
    name: "RulesView",
    components: {
        InfoMasterPage,
    },
}
</script>

<style lang="scss" scoped></style>