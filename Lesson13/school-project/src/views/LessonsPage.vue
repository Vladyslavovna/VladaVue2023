<template>
  <div>
    <h1>Lessons Page</h1>
    <div v-for="subject in getSubjects" :key="subject.id">
      <label>
        {{ subject.name }}
        <input type="checkbox" v-model="subject.selected">
      </label>
    </div>
    <button @click="onSelectTeacher">Select Teacher</button>
  </div>
  <router-view />
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "TestPage",
  computed: {
    ...mapGetters(['getSubjects']),
  },

  methods: {
    onSelectTeacher() {
      const selectedLessons = this.getSubjects.filter((subject) => subject.selected).map((subject) => subject.id)
      if (selectedLessons.length > 0) {
        this.$router.push({
          name: 'teachers',
          path: this.$route.query.redirect,
          params: { selectedLessons: selectedLessons }
        })

      } else {
        alert('Please select at least one lesson')
      }
    }
  }


};
</script>

<style scoped>
/* Ваши стили */
</style>