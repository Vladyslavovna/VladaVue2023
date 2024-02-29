<template>
    <div>
        <div>
            <label>
                Ім'я працівника
                <input v-model="workerData.name" type="text" />
            </label>
        </div>
        <div>
            <label>
                Позиція
                <input v-model="workerData.positionName" type="text" />
            </label>
        </div>
        <button @click="onAction">{{ actionButtonTitle }}</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "WorkersEdit",

    data() {
        return {
            workerData: {}
        }
    },

    computed: {
        ...mapGetters('workers', ['getWorkerById']),
        receivedId() {
            return this.$route.params.id
        },
        actionButtonTitle() {
            return this.receivedId ? 'Змінити дані працівника' : 'Створити працівника'
        }
    },

    created() {
        this.workerData = { ...this.getWorkerById(this.receivedId) }
    },

    methods: {
        ...mapActions('workers', ['addWorker', 'updateWorker']),
        onAction() {
            if (!this.receivedId)
                this.addWorker(this.workerData)
            else this.updateWorker(this.workerData)
            this.$router.push({ name: 'about' })
        }
    },
}
</script>

<style lang="scss" scoped></style>