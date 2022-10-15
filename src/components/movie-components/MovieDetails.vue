<template>
  <div class="movie-card">
    <img :src="imageURL" />
    <div class="movie-title">{{ title }}</div>
    <div class="overlay">
      <div class="inner-card-controls">
        <router-link :to="{ name: 'editMovie', params: { id: this.id } }">
          <button class="ctrl-btn">
            <i class="far fa-edit"></i>
          </button>
        </router-link>
        <button class="ctrl-btn" @click="$emit('delete-movie', id)">
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieDetails",
  props: {
    id: Number,
    title: String,
    imageURL: String,
  },
  // ,
  // created() {
  //     console.log(this.id,this.title,this.imageURL);
  // }
};
</script>
