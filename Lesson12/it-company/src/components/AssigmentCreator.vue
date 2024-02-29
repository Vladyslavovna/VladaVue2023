<template>
    <div>

        <select v-model="assigment.workerId">
            <option v-for="worker in getWorkersList" :key="worker.id" :value="worker.id">
                {{ worker.name }}
            </option>
        </select>
        <select v-model="assigment.candidateId">
            <option v-for="candidate in getCandidatesList" :key="candidate.id" :value="candidate.id">
                {{ candidate.name }}
            </option>
        </select>
        <select v-model="assigment.dayId">
            <option v-for="day in daysForInterviews" :key="day.id" :value="day.id">
                {{ day.name }}
            </option>
        </select>

        <button @click="addAssigment">Додати співбесіду до календаря</button>
    </div>
</template>

<script>
import { daysForInterviews } from '@/store/helpers'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: "AssigmentCreator",

    data() {
        return {
            assigment: {}
        }
    },
    created() {
        this.assigment = {
            workerId: null,
            candidateId: null,
            dayId: null
        }
    },
    computed: {
        ...mapGetters('workers', ['getWorkersList']),
        ...mapGetters('candidates', ['getCandidatesList']),
        daysForInterviews() {
            return daysForInterviews
        }
    },

    methods: {
        ...mapActions('assigments', ['addAssignmentAction']),
        addAssigment() {
            this.addAssignmentAction(this.assigment)
            this.assigment = {}
        }
    },

}
</script>

<style lang="scss" scoped></style>