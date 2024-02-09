<template>
    <div>
        <users-filter />
        <users-form />

        <users-list />

    </div>
</template>

<script>
import UsersFilter from './UsersFilter.vue';
import UsersForm from './UsersForm.vue';
import UsersList from './UsersList.vue'
import { mapActions } from 'vuex';
export default {
    name: "UsersManager",
    components: {
        UsersList,
        UsersForm,
        UsersFilter
    },

    created() {
        this.loadUsersList()
    },
    methods: {
        ...mapActions(['loadUsersList']),

    },



}
</script>

<style lang="scss" scoped></style>