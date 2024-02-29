<template>
    <div class="page">
        <ul>
            <li v-for="candidate in getCandidatesList" :key="candidate.id">
                {{ candidate.name }} - {{ candidate.positionName }}

                <button @click="deleteCandidate(candidate.id)">Видалити кандидата</button>
                <router-link :to="{
                    name: 'candidate-config',
                    params: {
                        id: candidate.id
                    },
                }">
                    Відредагувати дані кандидата
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "CandidatesPage",
    computed: {
        ...mapGetters('candidates', ['getCandidatesList'])
    },
    methods: {
        ...mapActions('candidates', ['deleteCandidate'])
    }
}
</script>

<style lang="scss" scoped>
li {
    margin-bottom: 15px;
}
</style>