<template>
  <div class="form-wrapper">
    <h2>Wpisz informacje o filmie</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-inputs">
        <label>Tytuł:</label>
        <input
          v-model="title"
          required
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
          required
          id="imageURLInput"
          name="imageURL"
          type="url"
          placeholder="Podaj link do plakatu"
        />
      </div>
      <img
        v-show="imageURL !== ''"
        :src="imageURL"
        width="200"
        height="250"
        alt="Podgląd plakatu"
      />
      <div class="form-inputs">
        <label>Długość(min):</label>
        <input
          v-model="length"
          required
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
import { addMovie, getMovieCount } from "../../api";

export default {
  name: "AddMovieForm",
  data() {
    return {
      title: "",
      imageURL: "",
      length: null,
      value: 0,
    };
  },
  async created() {
    this.value = (await getMovieCount()) + 1;
  },
  methods: {
    handleSubmit() {
      console.log(this.title, this.imageURL, this.length);
      let newMovie = {
        id: this.value,
        title: this.title,
        imageURL: this.imageURL,
        length: this.length,
        label: this.title,
        value: this.value,
        popularity: 0,
      };
      addMovie(newMovie);
      this.$emit("add-movie", newMovie);
    },
  },
};
</script>
