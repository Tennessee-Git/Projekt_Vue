<template>
  <div class="form-wrapper">
    <div>
      <h4>Informacje o seansie:</h4>
      <p>Film: {{ this.showing.movieTitle }}</p>
      <p>Sala: {{ this.showing.roomId }}</p>
      <p>Data: {{ this.showing.date }}</p>
    </div>
    <br />
    <form @submit.prevent="handleSubmit">
      <div class="form-inputs">
        <label for="name" class="customLabel">Imię:</label>
        <input
          v-model="name"
          type="text"
          name="name"
          id="name"
          class="customInput"
        />
      </div>
      <div class="form-inputs">
        <label for="lastName" class="customLabel">Nazwisko:</label>
        <input
          v-model="lastName"
          type="text"
          name="lastName"
          id="lastName"
          class="customInput"
        />
      </div>
      <div class="form-inputs">
        <label for="email" class="customLabel">Email:</label>
        <input
          v-model="email"
          type="text"
          name="email"
          id="email"
          class="customInput"
        />
      </div>
      <Room
        v-if="this.capacity"
        @select-seat="handleSeatSelect"
        :capacity="this.capacity"
        :seatsTaken="this.showing.seatsTaken"
      />
      <button class="AddBtn FormButton">Rezerwuj</button>
    </form>
  </div>
</template>

<script>
import {
  addReservation,
  editMovie,
  editShowing,
  getRoomById,
  getShowingById,
} from "../../api";
import Room from "./Room.vue";

export default {
  name: "ReservationForm",
  async created() {
    const res = await getShowingById(this.$route.params.id);
    this.showing = res;
    const resR = await getRoomById(this.showing.roomId);
    this.capacity = resR.capacity;
  },
  data() {
    return {
      selectedSeat: "",
      showing: {},
      capacity: 0,
      name: "",
      lastName: "",
      email: "",
    };
  },
  methods: {
    handleSubmit() {
      let newReservation = {
        name: this.name,
        lastName: this.lastName,
        email: this.email,
        showingId: this.showing.id,
        seatCode: this.selectedSeat,
      };
      this.showing.availableSeats -= 1;
      this.showing.seatsTaken.push(this.selectedSeat);

      // console.error(this.showing);
      // console.log(newReservation);
      addReservation(newReservation);
      editShowing(this.showing).then(this.$router.push("/Seanse"));
    },
    handleSeatSelect(seatCode) {
      console.log(seatCode);
      this.selectedSeat = seatCode;
    },
  },
  components: { Room },
};
</script>
