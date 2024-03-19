<template>
    <div class="teachers">
        <div v-for="lessonId in selectedLessons" :key="lessonId">
            {{ getLessonTitleById(lessonId).title }}
            <select v-model="selectedTeacherId[lessonId - 1]" :default="null">
                <option v-for="teacher in getTeachers" :key="teacher.id" :value="teacher.id">
                    {{ teacher.title }}
                </option>
            </select>
        </div>

        <button @click="onGo">Go</button>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "TeachersPage",
    data() {
        return {
            selectedTeacherId: []
        }
    },
    computed: {
        ...mapGetters(["getLessonTitleById"]),
        ...mapGetters(["getTeachers"]),
        selectedLessons() {
            return this.$route.params.lessonIds
        },
    },
    methods: {
        onGo() {
            this.$router.push({
                name: 'assigments',
                params: { lessonIds: this.selectedLessonIds, teacherIds: this.selectedTeacherId }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.teachers {
    display: flex;
}
</style>