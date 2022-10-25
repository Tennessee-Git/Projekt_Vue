<template>
  <div class="heading">
    <h1>Lista filmów:</h1>
    <button class="AddBtn" @click="this.showDialog = true">Dodaj film</button>
  </div>
  <Dialog v-model:visible="showDialog" :modal="true" class="dialog">
    <AddMovieForm @add-movie="addMovie" />
  </Dialog>
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
      showDialog: false,
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
  // watch: {
  //   movies(val, oldVal) {
  //     console.log(val, oldVal);
  //   },
  // },
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
      this.showDialog = false;
    },
  },
  components: { MoviesList, AddMovieForm },
};
</script>
