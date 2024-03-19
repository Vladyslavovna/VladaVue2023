<template>
    <div>
        <h1>Teachers Page</h1>
        <div v-for="lessonId in selectedLessons" :key="lessonId">
            {{ getLessonNameById(lessonId) }}
            <select v-model="selectedTeachers[lessonId]">
                <option v-for="teacher in getTeachers" :key="teacher.id" :value="teacher.id">
                    {{ teacher.name }}
                </option>
            </select>
        </div>
        <button @click="startLesson">Start lesson</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['getSubjects']),
        ...mapGetters(['getTeachers']),
        selectedLessons() {
            return this.$route.params.selectedLessons.split.map(id => parseInt(id));
        }
    },
    data() {
        return {
            selectedTeachers: {} // объект для хранения выбранных учителей для каждого урока
        };
    },
    methods: {
        getLessonNameById(id) {
            const lesson = this.getSubjects.find(subject => subject.id === id);
            return lesson ? lesson.name : 'Unknown Lesson';
        },
        startLesson() {
            const teachersId = Object.values(this.selectedTeachers)
            this.$router.push({
                name: 'test',
                params: { selectedLessons: this.$route.params.selectedLessons, teachersId: teachersId }
            });
        }
    }
};
</script>
