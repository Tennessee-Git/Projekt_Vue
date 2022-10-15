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
};
</script>

<style scoped>
.movie-card {
  width: 200px;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  border: 0;
  display: block;
  font-weight: bold;
}

.movie-card img {
  width: 200px;
  height: 250px;
}

.movie-card .overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 95%;
  height: 96%;
  border: 5px solid transparent;
  transition: all 0.4s ease;
}

.movie-card:hover .overlay {
  border: 5px solid rgb(68, 196, 140);
}

.inner-card-controls {
  opacity: 0;
  text-decoration: none;
  color: white;
}

.movie-card:hover .inner-card-controls {
  opacity: 1;
  transition: all 0.4s ease;
  visibility: visible;
  position: absolute;
}

.movie-title {
  text-shadow: rgb(0, 0, 0) 1px 1px 5px;
  color: rgb(255, 255, 255);
  background-color: transparent;
  text-align: center;
  position: absolute;
  bottom: 20px;
  left: 5px;
  width: 190px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
