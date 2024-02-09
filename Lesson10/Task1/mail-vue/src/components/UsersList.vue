<template>
    <div v-for="user in filteredUsersList" :key="user.id" class="userList">
        <span>{{ user.name }}</span>
        <span> {{ user.email }}</span>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "UsersList",

    computed: {
        ...mapGetters(['filteredUsersList']),
    },

}
</script>

<style lang="scss" scoped>
.userList {
    display: flex;
    justify-content: space-around;
    margin: 5px;
    padding: 5px;
    border: 2px solid black;
    border-radius: 5px;
    width: 300px;
    margin: 0 auto;
}
</style>