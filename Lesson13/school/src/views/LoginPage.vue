<template>
    <div>
        <label>
            User Name
            <input v-model="userName" type="text">
        </label>
    </div>
    <div>
        <label>
            User Password
            <input v-model="userPassword" type="password">
        </label>
    </div>
    <button @click="onLogin">Login</button>

</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "LoginPage",

    data() {
        return {
            userName: null,
            userPassword: null,
        }
    },
    methods: {
        ...mapActions(['setUserName']),
        onLogin() {
            window.userName = this.userName
            this.setUserName({ userName: this.userName })
            if (this.$route.query.redirect)
                this.$router.push({
                    path: this.$route.query.redirect,
                })
            else this.$router.push({ path: '/' })
        }
    },
}
</script>

<style lang="scss" scoped></style>