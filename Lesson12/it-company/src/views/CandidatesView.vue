<template>
    <div class="about">
        <h1>Список кандидатів</h1>
        <candidates-page />
    </div>
</template>
  
<script>
import CandidatesPage from '@/components/CandidatesPage.vue';
export default {
    name: "AboutView",
    components: {
        CandidatesPage
    },
}
</script>
  
<style lang="scss" scoped></style>
  