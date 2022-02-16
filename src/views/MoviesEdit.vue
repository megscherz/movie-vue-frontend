<script>
import axios from "axios";

export default {
  data: function () {
    return {
      movie: [],
      editMovieParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`/movies/${this.$route.params.id}`).then((response) => {
      console.log("movie to edit:", response.data);
      this.movie = response.data;
    });
  },
  methods: {
    updateMovie: function () {
      axios
        .patch(`/movies/${this.movie.id}`, this.movie)
        .then((response) => {
          console.log("updated movie:", response.data);
          this.$router.push(`/movies/${this.movie.id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="movie-edit">
    <h1>Edit Movie</h1>
    <form v-on:submit.prevent="updateMovie(movie)">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        Title:
        <input type="text" v-model="movie.title" />
      </div>
      <div>
        Year:
        <input type="text" v-model="movie.year" />
      </div>
      <div>
        Director:
        <input type="text" v-model="movie.director" />
      </div>
      <div>
        Plot:
        <input type="text" v-model="movie.plot" />
      </div>
      <div>
        Title:
        <input type="text" v-model="movie.title" />
      </div>
      <div>
        English:
        <input type="checkbox" id="choice1" name="true" value="t" />
        <label for="true">True</label>
        <input type="checkbox" id="choice2" name="false" value="f" />
        <label for="false">False</label>
      </div>
      <br />
      <input type="submit" value="Update" />
    </form>
  </div>
</template>

<style></style>
