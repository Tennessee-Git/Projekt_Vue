<template>
  <div class="heading">
    <br />
    <h1>Lista sal kinowych:</h1>
    <button class="AddBtn">Dodaj salę</button>
  </div>
  <RoomsList @delete-room="deleteRoomFunction" :rooms="this.rooms" />
</template>

<script>
import { deleteRoom, getRooms } from "../api";
import RoomsList from "../components/room-components/RoomsList.vue";

export default {
  name: "RoomsView",
  data() {
    return {
      rooms: [],
    };
  },
  async created() {
    try {
      const res = await getRooms();
      this.rooms = res;
    } catch (err) {
      console.err(err);
    }
  },
  watch: {
    rooms(val, oldVal) {
      console.log(val, oldVal);
    },
  },
  methods: {
    deleteRoomFunction(id) {
      console.log("Room to delete: ", id);
      deleteRoom(id);
      this.rooms = Array.from(this.rooms).filter((i) => i.id !== id);
      // console.log(this.rooms);
    },
    addRoom(room) {
      this.rooms = [...this.rooms, room];
    },
  },
  components: { RoomsList },
};
</script>
