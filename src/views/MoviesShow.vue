<script>
import axios from "axios";

export default {
  data: function () {
    return {
      movie: {},
    };
  },
  created: function () {
    axios.get(`/movies/${this.$route.params.id}`).then((response) => {
      console.log("movies show", response.data);
      this.movie = response.data;
    });
  },
  methods: {
    destroyMovie: function (movie) {
      axios.delete("/movies/" + movie.id).then((response) => {
        console.log("movies destroy", response);
        this.$router.push("/movies");
      });
    },
  },
};
</script>

<template>
  <div class="movies-show">
    <h2>{{ movie.title }}</h2>
    <p>Year: {{ movie.year }}</p>
    <p>Director: {{ movie.director }}</p>
    <p>Plot: {{ movie.plot }}</p>
    <p>Is the movie in English? {{ movie.english }}</p>
    <div>
      <router-link v-bind:to="`/movies`">Exit</router-link>
    </div>
    <button v-on:click="destroyMovie(movie)">Destroy</button>
    <div>
      <router-link v-bind:to="`/movies/${movie.id}/edit`">Edit</router-link>
    </div>
  </div>
</template>

<style></style>
