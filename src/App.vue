<script>
export default {
  data: function () {
    return {
      // isLoggedIn: !!localStorage.jwt,
    };
  },
  // watch: {
  //   $route: function () {
  //     this.isLoggedIn = !!localStorage.jwt;
  //   },
  // },
  methods: {
    isLoggedIn: function () {
      return localStorage.getItem("jwt");
    },
  },
};
</script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <router-link to="/signup">Signup</router-link>
    |
    <span v-if="!isLoggedIn()">
      <router-link to="/login">Login</router-link>
    </span>
    |
    <span v-if="isLoggedIn()">
      <router-link to="/logout">Logout</router-link>
    </span>
    |
    <router-link to="/movies">All Movies</router-link>
    |
    <span v-if="isLoggedIn()">
      <router-link to="/movies/new">Create New Movie</router-link>
    </span>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
