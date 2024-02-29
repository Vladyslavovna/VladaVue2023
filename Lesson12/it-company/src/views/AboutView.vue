<template>
  <div class="about">
    <h1>Список робітників</h1>
    <workers-page />
  </div>
</template>

<script>
import WorkersPage from '@/components/WorkersPage.vue';
export default {
  name: "AboutView",
  components: {
    WorkersPage
  },
}
</script>

<style lang="scss" scoped></style>
