<template>


    <div v-for="lesson in getLessons" :key="lesson.id">
        {{ lesson.title }}
        <input type="checkbox" v-model="selectedLessonIds" :value="lesson.id">
    </div>
    <button @click="onClick">go</button>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "LessonPage",
    computed: {
        ...mapGetters(["getLessons"]),
    },
    data() {
        return {
            selectedLessonIds: [],
        }
    },
    methods: {
        onClick() {
            this.$router.push({
                name: 'teachers', params: { lessonIds: this.selectedLessonIds },
            });
        }
    },
}
</script>

<style lang="scss" scoped></style>