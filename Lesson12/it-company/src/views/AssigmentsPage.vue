<template>
    <div>
        <assigment-creator />
        <assigments-list />
    </div>
</template>

<script>
import AssigmentCreator from '@/components/AssigmentCreator.vue';
import AssigmentsList from '@/components/AssigmentsList.vue';
export default {
    name: "AssigmentsPage",
    components: {
        AssigmentCreator,
        AssigmentsList
    },
    
}
</script>

<style lang="scss" scoped></style>