<template>
  <div class="heading">
    <h1>Lista sal kinowych:</h1>
    <button class="AddBtn" @click="this.showDialog = true">Dodaj salę</button>
  </div>
  <Dialog v-model:visible="showDialog" :modal="true" class="dialog">
    <AddRoomForm @add-room="addRoom" />
  </Dialog>
  <RoomsList @delete-room="deleteRoomFunction" :rooms="this.rooms" />
</template>

<script>
import { deleteRoom, getRooms } from "../api";
import RoomsList from "../components/room-components/RoomsList.vue";
import AddRoomForm from "../components/forms/AddRoomForm.vue";

export default {
  name: "RoomsView",
  data() {
    return {
      rooms: [],
      showDialog: false,
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
  // watch: {
  //   rooms(val, oldVal) {
  //     console.log(val, oldVal);
  //   },
  // },
  methods: {
    deleteRoomFunction(id) {
      console.log("Room to delete: ", id);
      deleteRoom(id);
      this.rooms = Array.from(this.rooms).filter((i) => i.id !== id);
      // console.log(this.rooms);
    },
    addRoom(room) {
      this.rooms = [...this.rooms, room];
      this.showDialog = false;
    },
  },
  components: { RoomsList, AddRoomForm },
};
</script>
