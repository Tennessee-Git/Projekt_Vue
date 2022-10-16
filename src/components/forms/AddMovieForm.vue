<template>
  <div class="form-wrapper">
    <h2>Wpisz informacje o filmie</h2>
    <br />
    <form @submit.prevent="handleSubmit">
      <div class="form-inputs">
        <label>Tytuł:</label>
        <input
          required
          oninvalid="this.setCustomValidity('Tytuł filmu musi mieć co najmniej 5 znaków!')"
          minlength="5"
          pattern=".*\S+.*"
          id="titleInput"
          name="title"
          type="text"
          placeholder="Podaj tytuł filmu"
        />
      </div>
      <div class="form-inputs">
        <label>Link do plakatu:</label>
        <input
          required
          pattern="https://.*"
          oninvalid="this.setCustomValidity('Podaj poprawny link do plakatu!')"
          id="imageURLInput"
          name="imageURL"
          type="url"
          placeholder="Podaj link do plakatu"
        />
      </div>
      <div class="form-inputs">
        <label>Długość(min):</label>
        <input
          required
          oninvalid="this.setCustomValidity('Długość filmu musi być w zakresie 30-300 minut!')"
          min="30"
          max="300"
          id="lengthInput"
          name="length"
          type="number"
          placeholder="Podaj długość filmu (w minutach)"
        />
      </div>
    </form>
    <img
      v-if="imageURL"
      :src="imageURL"
      width="200px"
      height="250px"
      alt="Podgląd plakatu"
    />
    <br />
    <button class="AddBtn" type="submit">Dodaj</button>
  </div>
</template>

<script>
export default {
  name: "AddMovieForm",
  data() {
    return {
      title: "",
      imageURL: "",
      length: 0,
    };
  },
  methods: {
    handleSubmit(event) {
      const { title, imageURL, length } = Object.fromEntries(
        new FormData(event.target)
      );
      this.title = title;
      this.imageURL = imageURL;
      this.length = length;
      console.log(this.title, this.imageURL, this.length);
    },
  },
};
</script>
