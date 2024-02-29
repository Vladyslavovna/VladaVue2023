<template>
    <div>
        <div>
            <label>
                Ім'я кандидата
                <input v-model="candidateData.name" type="text" />
            </label>
        </div>
        <div>
            <label>
                Позиція
                <input v-model="candidateData.positionName" type="text" />
            </label>
        </div>
        <button @click="onAction">{{ actionButtonTitle }}</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "CandidatesEdit",

    data() {
        return {
            candidateData: {}
        }
    },

    computed: {
        ...mapGetters('candidates', ['getCandidateById']),
        receivedId() {
            return this.$route.params.id
        },
        actionButtonTitle() {
            return this.receivedId ? 'Змінити дані кандидата' : 'Створити кандидата'
        }
    },

    created() {
        this.candidateData = { ...this.getCandidateById(this.receivedId) }
    },

    methods: {
        ...mapActions('candidates', ['addCandidate', 'updateCandidates']),
        onAction() {
            if (!this.receivedId)
                this.addCandidate(this.candidateData)
            else this.updateCandidates(this.candidateData)
            this.$router.push({ name: 'candidates' })
        }
    },
}
</script>

<style lang="scss" scoped></style>