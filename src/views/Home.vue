<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to the Movvie App!",
      movies: [],
      newMovieParams: {},
      currentMovie: {},
      editMovieParams: {},
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
      axios
        .post("http://localhost:3000/movies", this.newMovieParams)
        .then((response) => {
          console.log("Success!", response.data);
          this.movies.push(response.data);
          this.newMovieParams = {};
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
    },
    showMovie: function (movie) {
      console.log(movie);
      this.currentMovie = movie;
      this.editMovieParams = movie;
      document.querySelector("#movie-details").showModal();
    },
    updateMovie: function (movie) {
      axios
        .patch(`http://localhost:3000/movies/${movie.id}`, movie)
        .then((response) => {
          console.log("Yippee!", response.data);
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
    },
    destroyMovie: function (movie) {
      if (confirm("Do you reallllllyyyyy want to do this???")) {
        axios.delete(`http://localhost:3000/movies/${movie.id}`).then((response) => {
          console.log("You da wo-man!", response.data);
          var index = this.movies.indexOf(movie);
          this.movies.splice(index, 1);
        });
      }
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div>
      Title:
      <input type="text" v-model="newMovieParams.title" />
    </div>
    <div>
      Year:
      <input type="text" v-model="newMovieParams.year" />
    </div>
    <div>
      Plot:
      <input type="text" v-model="newMovieParams.plot" />
    </div>
    <div>
      Director:
      <input type="text" v-model="newMovieParams.director" />
    </div>
    <div>
      English:
      <input type="text" v-model="newMovieParams.english" />
    </div>
    <button v-on:click="createMovie()">Create Movie</button>
    <br />
    <h2>All Movies</h2>
    <div v-for="movie in movies" :key="movie.id">
      <h3>Title: {{ movie.title }}</h3>
      <button v-on:click="showMovie(movie)">More Info</button>
    </div>
    <div>
      <dialog id="movie-details">
        <form method="dialog">
          <h1>Movie Info</h1>
          <p>
            Title:
            <input type="text" v-model="editMovieParams.title" />
          </p>
          <p>
            Year:
            <input type="text" v-model="editMovieParams.year" />
          </p>
          <p>
            Director:
            <input type="text" v-model="editMovieParams.director" />
          </p>
          <p>
            Plot:
            <input type="text" v-model="editMovieParams.plot" />
          </p>
          <p>
            English:
            <input type="text" v-model="editMovieParams.english" />
          </p>
          <button v-on:click="updateMovie(currentMovie)">Update</button>
          <button v-on:click="destroyMovie(currentMovie)">Destroy?!</button>
          <button>Close</button>
        </form>
      </dialog>
    </div>
  </div>
</template>

<style></style>
