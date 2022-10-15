<template>
  <div class="card-container">
    <div class="custom-grid">
      <div v-for="room of rooms" :key="room.id">
        <RoomDetails
          @delete-room="$emit('delete-room', room.id)"
          :id="room.id"
          :label="room.label"
          :value="room.value"
          :capacity="room.capacity"
        />
      </div>
    </div>
  </div>
</template>

<script>
import RoomDetails from "./RoomDetails.vue";
export default {
  name: "RoomsList",
  props: {
    rooms: Array,
  },
  components: { RoomDetails },
  emits: ["delete-room"],
};
</script>
