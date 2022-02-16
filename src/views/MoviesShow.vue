<script>
import axios from "axios";

export default {
  data: function () {
    return {
      movie: {},
    };
  },
  created: function () {
    axios.get(`/movies/$this.$route.params.id`).then((response) => {
      console.log("movies show", response.data);
      this.movie = response.data;
    });
  },
  methods: {},
};
</script>

<template>
  <div class="movies-show">
    <h2>{{ movie.title }}</h2>
    <p>Year: {{ movie.year }}</p>
    <p>Director: {{ movie.director }}</p>
    <p>Plot: {{ movie.plot }}</p>
    <p>Is the movie in English? {{ movie.english }}</p>
    <button>Exit</button>
  </div>
</template>

<style></style>
