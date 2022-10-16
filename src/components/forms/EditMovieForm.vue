<template>
  <div class="form-wrapper">
    <h2>Wpisz informacje o filmie</h2>
    <br />
    <form @submit.prevent="handleSubmit">
      <div class="form-inputs">
        <label>Aktualny tytuł: {{ oldMovie.title }}</label>
        <input
          v-model="title"
          minlength="5"
          id="titleInput"
          name="title"
          type="text"
          placeholder="Podaj tytuł filmu"
        />
      </div>
      <div class="form-inputs">
        <label>Link do plakatu:</label>
        <input
          v-model="imageURL"
          id="imageURLInput"
          name="imageURL"
          type="url"
          placeholder="Podaj link do plakatu"
        />
      </div>
      <div class="inline-images">
        <img
          :src="oldMovie.imageURL"
          width="200"
          height="250"
          class="inline-image"
          alt="Podgląd plakatu"
        />
        <img
          :src="imageURL"
          width="200"
          height="250"
          class="inline-image"
          alt="Podgląd nowego plakatu"
        />
      </div>
      <div class="form-inputs">
        <label>Aktualna długość(min): {{ oldMovie.length }}</label>
        <input
          v-model="length"
          min="30"
          max="300"
          id="lengthInput"
          name="length"
          type="number"
          placeholder="Podaj długość filmu (w minutach)"
        />
      </div>
      <button class="AddBtn FormButton" type="submit">Dodaj</button>
    </form>
  </div>
</template>

<script>
import { editMovie, getMovieById } from "../../api";

export default {
  name: "EditMovieForm",
  data() {
    return {
      title: "",
      imageURL: "",
      length: null,
      value: 0,
      label: "",
      popularity: 0,
      oldMovie: {},
    };
  },
  async created() {
    const res = await getMovieById(this.$route.params.id);
    console.log(res);
    this.oldMovie.title = res.title;
    this.oldMovie.length = res.length;
    this.oldMovie.imageURL = res.imageURL;
    this.oldMovie.label = res.label;
    this.oldMovie.value = res.value;
    this.oldMovie.popularity = res.popularity;
    this.oldMovie.id = res.id;
    this.value = res.value;
    this.popularity = res.popularity;
  },
  methods: {
    handleSubmit() {
      console.log(this.title, this.imageURL, this.length);
      let movie2Edit = {
        id: this.$route.params.id,
        title:
          this.title !== this.oldMovie.title && this.title !== ""
            ? this.title
            : this.oldMovie.title,
        imageURL:
          this.imageURL !== this.oldMovie.imageURL && this.imageURL !== ""
            ? this.imageURL
            : this.oldMovie.imageURL,
        length:
          this.length !== this.oldMovie.length && this.length !== null
            ? this.length
            : this.oldMovie.length,
        label:
          this.title !== this.oldMovie.title ? this.title : this.oldMovie.title,
        value: this.$route.params.id,
        popularity: this.oldMovie.popularity,
      };
      editMovie(movie2Edit);
      this.$router.push("/Filmy");
    },
  },
};
</script>

<style>
.inline-images {
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  width: 100%;
}

.inline-image {
  margin-right: 20px;
}
</style>
