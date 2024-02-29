<template>
    <div class="page">
        <ul>
            <li v-for="worker in getWorkersList" :key="worker.id">
                {{ worker.name }} - {{ worker.positionName }}

                <button @click="deleteWorker(worker.id)">Видалити працівника</button>
                <router-link :to="{
                    name: 'workers-config',
                    params: {
                        id: worker.id
                    },
                }">
                    Відредагувати дані працівника
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "WorkersPage",
    computed: {
        ...mapGetters('workers', ['getWorkersList'])
    },
    methods: {
        ...mapActions('workers', ['deleteWorker'])
    }
}
</script>

<style lang="scss" scoped>
li {
    margin-bottom: 15px;
}
</style>