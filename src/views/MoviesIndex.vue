<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "List of all movies",
      movies: [],
      titleFilter: "",
    };
  },
  computed: {
    filteredMovies() {
      return this.movies.filter((movie) => {
        return movie.title.toLowerCase().includes(this.titleFilter.toLowerCase());
      });
    },
  },
  created: function () {
    this.indexMovies();
  },
  methods: {
    indexMovies: function () {
      axios.get("/movies").then((response) => {
        console.log("movies index", response);
        this.movies = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="movie-index">
    <h1>{{ message }}</h1>
    Search by title:
    <input v-model="titleFilter" />
    <div v-for="movie in filteredMovies" v-bind:key="movie.id">
      Search by name:
      <input v-model="titleFilter" list="titles" />
      <datalist id="titles">
        <option v-for="movie in movies" v-bind:key="movie.id">{{ movie.title }}</option>
      </datalist>
      <h2>{{ movie.title }}</h2>
      <router-link v-bind:to="`/movies/${movie.id}`">More details</router-link>
    </div>
  </div>
</template>

<style></style>
