<template>
  <div class="form-wrapper">
    <form @submit.prevent="handleSubmit">
      <div class="form-inputs">
        <label class="customLabel"
          >Aktualny film: {{ this.oldShowing.movieTitle }}</label
        >
        <select class="customSelect" v-model="selectedMovie" id="movieId">
          <option v-for="movie of movies" :value="movie.id">
            {{ movie["title"] }}
          </option>
        </select>
      </div>
      <div class="form-inputs">
        <label class="customLabel"
          >Aktualna sala: Sala {{ this.oldShowing.roomId }}</label
        >
        <select class="customSelect" v-model="selectedRoom" id="roomId">
          <option v-for="room of rooms" :value="room.id">
            {{ room["label"] }}
          </option>
        </select>
      </div>
      <div class="form-inputs">
        <label class="customLabel"
          >Aktualna data seansu: {{ this.oldShowing.date }}</label
        >
        <input
          class="customInput"
          v-model="date"
          type="datetime-local"
          :min="startDate"
          name="date"
          id="date"
        />
      </div>
      <button type="submit" class="AddBtn FormButton">Edytuj</button>
    </form>
  </div>
</template>

<script>
import {
  addShowing,
  editShowing,
  getMovies,
  getRooms,
  getShowingById,
} from "../../api";
import moment from "moment";

export default {
  name: "EditShowingForm",
  data() {
    return {
      startDate: String(moment().format("YYYY-MM-DDTHH:mm")),
      date: "",
      selectedMovie: null,
      selectedRoom: null,
      movies: [],
      rooms: [],
      oldShowing: {},
    };
  },
  async created() {
    const resM = await getMovies();
    this.movies = resM;
    const resR = await getRooms();
    this.rooms = resR;
    const resS = await getShowingById(this.$route.params.id);
    console.log(resS);
    this.oldShowing.id = resS.id;
    this.oldShowing.date = resS.date;
    this.oldShowing.movieId = resS.movieId;
    this.oldShowing.roomId = resS.roomId;
    this.oldShowing.movieTitle = resS.movieTitle;
    this.oldShowing.availableSeats = resS.availableSeats;
    this.oldShowing.seatsTaken = resS.seatsTaken;
  },
  methods: {
    handleSubmit() {
      let showing2Edit = {
        id: this.oldShowing.id,
        date:
          this.date !== ""
            ? moment(this.date).format("DD-MM-YYYY HH:mm")
            : this.oldShowing.date,
        movieId:
          this.selectedMovie !== this.oldShowing.movieId &&
          this.selectedMovie !== null
            ? this.selectedMovie
            : this.oldShowing.movieId,
        roomId:
          this.selectedRoom !== this.oldShowing.roomId &&
          this.selectedRoom !== null
            ? this.selectedRoom
            : this.oldShowing.roomId,
        movieTitle:
          this.selectedMovie !== this.oldShowing.movieId &&
          this.selectedMovie !== null
            ? this.movies.find((movie) => movie.id === this.selectedMovie).title
            : this.oldShowing.movieTitle,
        availableSeats:
          this.selectedRoom !== this.oldShowing.roomId &&
          this.selectedRoom !== null
            ? this.rooms.find((room) => room.id === this.selectedRoom).capacity
            : this.oldShowing.availableSeats,
        seatsTaken: Array.from(this.oldShowing.seatsTaken),
      };
      console.log("Showing to add", showing2Edit);
      editShowing(showing2Edit);
      this.$router.push("/Seanse");
    },
  },
};
</script>
