<template>
    <div class="container">
        <div class="assigment"
            v-for="{ workerName, candidateName, candidatePositionName, day, positionName, id } in getNewAssigmentsList"
            :key="id">
            Працівник: {{ workerName }} Position: {{ positionName }}
            Candidate: {{ candidateName }} - Position: {{ candidatePositionName }}
            Day: {{ day }}
            <button @click="deleteAssigment(id)">Видалити співбесіду</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "AssigmentsList",

    computed: {
        ...mapGetters('assigments', ['getNewAssigmentsList']),

    },
    methods: {
        ...mapActions('assigments', ['deleteAssigment']),
    },
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.assigment {
    border: 1px solid black;
    width: 300px;
}
</style>