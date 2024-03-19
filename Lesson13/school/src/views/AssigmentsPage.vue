<template>
    <div class="teachers">
        <div class="flex" v-for="data in schoolData" :key="data.lessonId">
            {{ getLessonTitleById(data.lessonId).title }} - {{ getTeacherTitleById(data.teacherId).title }}
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "AssigmentsPage",
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(["getLessonTitleById"]),
        ...mapGetters(["getTeacherTitleById"]),
        selectedLessons() {
            return this.$route.params.lessonIds
        },
        selectedTeachers() {
            return this.$route.params.teacherIds
        },
        filteredTeacherId() {
            return this.selectedTeachers.filter(id => id !== undefined);
        },
        schoolData() {
            return this.selectedLessons.map((lessonId, index) => {
                return {
                    lessonId,
                    teacherId: this.filteredTeacherId[index]
                };
            });
        },
    }
}
</script>

<style lang="scss" scoped>
span {
    display: block;
}

.flex {
    display: flex;
    width: 300px;
}

.teachers {
    display: flex;
    flex-direction: column;
}
</style>