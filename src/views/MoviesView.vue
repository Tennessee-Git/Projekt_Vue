<template>
  <div class="heading">
    <h1>Lista filmów:</h1>
    <button class="AddBtn">Dodaj film</button>
  </div>
  <AddMovieForm @add-movie="addMovie" />
  <MoviesList @delete-movie="deleteMovieFunction" :movies="this.movies" />
</template>

<script>
import { getMovies, deleteMovie } from "../api.js";
import MoviesList from "../components/movie-components/MoviesList.vue";
import AddMovieForm from "../components/forms/AddMovieForm.vue";

export default {
  name: "MoviesView",
  data() {
    return {
      movies: [],
    };
  },
  async created() {
    try {
      const res = await getMovies();
      // console.log('res',res);
      this.movies = res;
    } catch (err) {
      console.error(err);
    }
  },
  watch: {
    movies(val, oldVal) {
      console.log(val, oldVal);
    },
  },
  methods: {
    deleteMovieFunction(id) {
      console.log("Movie to delete: ", id);
      deleteMovie(id);
      this.movies = Array.from(this.movies).filter((i) => i.id !== id);
      // console.log(this.movies);
    },
    addMovie(movie) {
      // console.log("Movie to add: ", movie);
      this.movies = [...this.movies, movie];
    },
  },
  components: { MoviesList, AddMovieForm },
};
</script>
