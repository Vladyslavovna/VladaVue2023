<template>
  <nav>
    <router-link to="/">Головна</router-link> |
    <router-link to="/about">Працівники</router-link> |
    <router-link to="/candidates">Кандидати</router-link> |
    <router-link to="/interview">Співбесіди</router-link> 
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  appearance: none;
  color: black;
}

button {
  background-color: #42b983;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
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
