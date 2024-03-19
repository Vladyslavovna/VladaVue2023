<template>
    <div>
        <main-master-page>
            <h1>Постачальники</h1>
            <owners-list></owners-list>
            <template #rating>
                <h1>Найбільш популярний : Економ</h1>
            </template>
            <template #status>
                <h1> Статус : Відкрито</h1>
            </template>
        </main-master-page>
    </div>
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterPage.vue";
import OwnersList from "@/components/OwnersList.vue";
export default {
    name: "OwnersView",
    components: {
        MainMasterPage,
        OwnersList
    },
}
</script>

<style lang="scss" scoped></style>