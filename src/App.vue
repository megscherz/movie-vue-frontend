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
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="/">Home</a>
        |
        <a class="nav-item nav-link active" href="/about">About</a>
        |
        <a class="nav-item nav-link active" href="/signup">Signup</a>
        |
        <a class="nav-item nav-link active" v-if="!isLoggedIn()" href="/login">Login</a>
        |
        <a class="nav-item nav-link active" v-if="isLoggedIn()" href="/logout">Logout</a>
        |
        <a class="nav-item nav-link active" href="/movies">See All Movies</a>
        |
        <a class="nav-item nav-link active" v-if="isLoggedIn()" href="/movies/new">Create New</a>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2485e6;
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
