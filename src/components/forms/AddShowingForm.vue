<template>
  <div class="form-wrapper">
    <form @submit.prevent="handleSubmit">
      <div class="form-inputs">
        <label class="customLabel">Film:</label>
        <select
          class="customSelect"
          v-model="selectedMovie"
          id="movieId"
          required
        >
          <option v-for="movie of movies" :value="movie">
            {{ movie["title"] }}
          </option>
        </select>
      </div>
      <div class="form-inputs">
        <label class="customLabel">Sala:</label>
        <select
          class="customSelect"
          v-model="selectedRoom"
          id="roomId"
          required
        >
          <option v-for="room of rooms" :value="room">
            {{ room["label"] }}
          </option>
        </select>
      </div>
      <div class="form-inputs">
        <label class="customLabel">Data seansu:</label>
        <input
          class="customInput"
          required
          v-model="date"
          type="datetime-local"
          min="2022-10-17T08:30"
          name="date"
          id="date"
        />
      </div>
      <button class="AddBtn FormButton">Dodaj</button>
    </form>
  </div>
</template>

<script>
import { addShowing, getMovies, getRooms } from "../../api";
import moment from "moment";

export default {
  name: "AddShowingForm",
  data() {
    return {
      startDate: moment().format("YYYY-MM-DDTHH:mm"),
      date: "",
      selectedMovie: "",
      selectedRoom: "",
      movies: [],
      rooms: [],
      id: 0,
    };
  },
  async created() {
    const resM = await getMovies();
    this.movies = resM;
    const resR = await getRooms();
    this.rooms = resR;
  },
  methods: {
    handleSubmit() {
      let newShowing = {
        date: moment(this.date).format("DD-MM-YYYY HH:mm"),
        movieId: this.selectedMovie.id,
        roomId: this.selectedRoom.id,
        movieTitle: this.selectedMovie.title,
        availableSeats: this.selectedRoom.capacity,
        seatsTaken: [],
      };
      console.log("Showing to add", newShowing);
      console.error(this.startDate, typeof this.startDate);
      addShowing(newShowing);
      this.$emit("add-showing", newShowing);
    },
  },
};
</script>
