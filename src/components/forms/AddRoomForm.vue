<template>
  <div class="form-wrapper">
    <h2>Podaj pojemność nowej sali</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-inputs">
        <label>Pojemność:</label>
        <input
          v-model="capacity"
          required
          id="capacity"
          min="30"
          max="150"
          name="capacity"
          type="number"
          placeholder="Podaj pojemność sali"
        />
      </div>
      <button class="AddBtn FormButton" type="submit">Dodaj</button>
    </form>
  </div>
</template>

<script>
import { addRoom, getRoomCount } from "../../api";

export default {
  name: "AddRoomForm",
  async created() {
    this.value = (await getRoomCount()) + 1;
  },
  data() {
    return {
      capacity: null,
      value: 0,
    };
  },
  methods: {
    handleSubmit() {
      let newRoom = {
        id: this.value,
        label: "Sala " + String(this.value),
        value: this.value,
        capacity: this.capacity,
      };
      addRoom(newRoom);
      this.$emit("add-room", newRoom);
    },
  },
};
</script>
