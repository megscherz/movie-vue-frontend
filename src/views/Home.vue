<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to the Movvie App!",
      movies: [],
      newMovie: [],
    };
  },
  created: function () {
    this.indexMovies();
  },
  methods: {
    indexMovies: function () {
      axios.get("http://localhost:3000/movies").then((response) => {
        console.log(response.data);
        this.movies = response.data;
      });
    },
    createMovie: function () {
      var params = {
        title: "Yes Man",
        year: 2012,
        plot: "A man says yes to everything.",
        director: "Stephan Speilberg",
        english: true,
      };
      axios
        .post("http://localhost:3000/movies", params)
        .then((response) => {
          console.log("Success!", response.data), this.movies.push(response.data);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    showMovie: function () {
      var params = {
        id: 2,
      };
      axios.get("http://localhost:3000/movies", params).then((response) => {
        console.log(response.data);
        this.movies = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div><input type="text" v-model="newMovie" /></div>
    <button v-on:click="createMovie()">Create Movie</button>
    <h2>All Movies</h2>
    <div v-for="movie in movies" v-bind:key="movie.id">
      <h3>Title: {{ movie.title }}</h3>
      <p>Director: {{ movie.director }}</p>
      <button v-on:click="showMovies()">More Info</button>
    </div>
  </div>
</template>

<style></style>
