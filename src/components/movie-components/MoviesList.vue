<template>
  <div class="card-container">
    <div class="custom-grid">
      <div v-for="movie of movies" :key="movie.id">
        <MovieDetails
          @delete-movie="$emit('delete-movie', movie.id)"
          :id="movie.id"
          :title="movie.title"
          :imageURL="movie.imageURL"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MovieDetails from "./MovieDetails.vue";

export default {
  name: "MoviesList",
  props: {
    movies: Array,
  },
  components: { MovieDetails },
  emits: ["delete-movie"],
};
</script>
