<script>
import axios from "axios";

export default {
  data: function () {
    return {
      movies: [],
      newMovieParams: { plot: "" },
      errors: [],
    };
  },
  methods: {
    createMovie: function () {
      axios
        .post("/movies", this.newMovieParams)
        .then((response) => {
          console.log("movies create", response);
          this.$router.push("/movies");
        })
        .catch((error) => {
          console.log("movies create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="movie-new">
    <h1>Create a New Movie</h1>
    <form v-on:submit.prevent="createMovie()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        Title:
        <input type="text" v-model="newMovieParams.title" />
      </div>
      <br />
      <div>
        Year:
        <input type="text" v-model="newMovieParams.year" />
      </div>
      <br />
      <div>
        Director:
        <input type="text" v-model="newMovieParams.director" />
      </div>
      <br />
      <div>
        Plot:
        <input type="text" v-model="newMovieParams.plot" />
        <br />
        <small>{{ 500 - newMovieParams.plot.length }} characters remaining</small>
      </div>
      <br />
      <div>
        English:
        <input type="checkbox" id="choice1" name="true" value="t" />
        <label for="true">True</label>
        <input type="checkbox" id="choice2" name="false" value="f" />
        <label for="false">False</label>
        <br />
      </div>
      <br />
      <input type="submit" value="Create Movie" />
    </form>
  </div>
</template>

<style></style>
