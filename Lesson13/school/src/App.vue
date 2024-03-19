<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/lessons">Lessons</router-link>

    <span v-if="loggedIn">{{ getUserName }}</span>
    <button @click="mainLogin">{{ loginButtonText }}</button>
  </nav>
  <router-view />
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["getUserName"]),
    loggedIn() {
      return this.getUserName
    },
    loginButtonText() {
      return this.loggedIn ? "Logout" : "Login"
    }
  },

  methods: {
    ...mapActions(["logOut"]),
    mainLogin() {
      if (this.loggedIn) {
        this.logOut()
        window.userName = null
        this.$router.push({ name: "home" })
      } else {
        this.$router.push({ name: "login" })
      }
    }
  },
}

</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
