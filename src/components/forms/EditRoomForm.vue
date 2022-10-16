<template>
  <div class="form-wrapper">
    <h2>Edytuj informacje o sali</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-inputs">
        <label>Aktualna pojemność: {{ this.oldRoom.capacity }}</label>
        <input
          v-model="capacity"
          id="capacity"
          min="30"
          max="150"
          name="capacity"
          type="number"
          placeholder="Podaj pojemność sali"
        />
      </div>
      <button class="AddBtn FormButton" type="submit">Edytuj</button>
    </form>
  </div>
</template>

<script>
import { editRoom, getRoomById } from "../../api";

export default {
  name: "EditRoomForm",
  async created() {
    const res = await getRoomById(this.$route.params.id);
    console.log(res);
    this.oldRoom.capacity = res.capacity;
    this.oldRoom.value = res.value;
    this.oldRoom.label = res.label;
    this.oldRoom.id = res.id;
  },
  data() {
    return {
      capacity: null,
      oldRoom: {},
    };
  },
  methods: {
    handleSubmit() {
      let room2Edit = {
        id: this.oldRoom.id,
        label: this.oldRoom.label,
        value: this.oldRoom.value,
        capacity:
          this.capacity !== this.oldRoom.capacity && this.capacity !== null
            ? this.capacity
            : this.oldRoom.capacity,
      };
      editRoom(room2Edit);
      this.$router.push("/Sale");
    },
  },
};
</script>
