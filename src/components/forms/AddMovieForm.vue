<template>
  <div class="form-wrapper">
    <h2>Wpisz informacje o filmie</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-inputs">
        <label class="customLabel">Tytuł:</label>
        <input
          class="customInput"
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
        <label class="customLabel">Link do plakatu:</label>
        <input
          class="customInput"
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
        <label class="customLabel">Długość(min):</label>
        <input
          class="customInput"
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
import { addMovie, getNextMovieId } from "../../api";

export default {
  name: "AddMovieForm",
  data() {
    return {
      title: "",
      imageURL: "",
      length: null,
      id: 0,
    };
  },
  async created() {
    this.id = await getNextMovieId();
  },
  methods: {
    handleSubmit() {
      console.log(this.title, this.imageURL, this.length);
      let newMovie = {
        id: this.id,
        title: this.title,
        imageURL: this.imageURL,
        length: this.length,
        label: this.title,
        value: this.id,
      };
      addMovie(newMovie);
      this.$emit("add-movie", newMovie);
    },
  },
};
</script>
