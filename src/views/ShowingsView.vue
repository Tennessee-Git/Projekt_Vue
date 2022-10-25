<template>
  <div class="heading">
    <h1>Lista seansów:</h1>
    <button class="AddBtn" @click="showModal = true">Dodaj seans</button>
  </div>
  <vue-final-modal
    v-model="showModal"
    :click-to-close="true"
    :esc-to-close="true"
    :fit-parent="true"
  >
    <AddShowingForm @add-showing="addShowing" />
  </vue-final-modal>
  <ShowingsList
    @delete-showing="deleteShowingFunction"
    :showings="this.showings"
  />
</template>

<script>
import { deleteShowing, getShowings } from "../api";
import ShowingsList from "../components/showing-components/ShowingsList.vue";
import AddShowingForm from "../components/forms/AddShowingForm.vue";
import { VueFinalModal } from "vue-final-modal";
export default {
  name: "ShowingsView",
  data() {
    return {
      showings: [],
      showModal: false,
    };
  },
  async created() {
    try {
      const res = await getShowings();
      this.showings = res;
    } catch (err) {
      console.error(err);
    }
  },
  // watch: {
  //   showings(val, oldVal) {
  //     console.log(val, oldVal);
  //   },
  // },
  methods: {
    deleteShowingFunction(id) {
      console.log("Showing to delete: ", id);
      deleteShowing(id);
      this.showings = Array.from(this.showings).filter((i) => i.id !== id);
    },
    addShowing(showing) {
      this.showings = [...this.showings, showing];
      this.showModal = false;
    },
  },
  components: { ShowingsList, AddShowingForm, VueFinalModal },
};
</script>
