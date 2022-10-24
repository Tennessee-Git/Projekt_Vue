<template>
  <div class="heading">
    <h1>Lista seansów:</h1>
    <button class="AddBtn">Dodaj seans</button>
  </div>
  <AddShowingForm @add-showing="addShowing" />
  <ShowingsList
    @delete-showing="deleteShowingFunction"
    :showings="this.showings"
  />
</template>

<script>
import { deleteShowing, getShowings } from "../api";
import ShowingsList from "../components/showing-components/ShowingsList.vue";
import AddShowingForm from "../components/forms/AddShowingForm.vue";
export default {
  name: "ShowingsView",
  data() {
    return {
      showings: [],
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
    },
  },
  components: { ShowingsList, AddShowingForm },
};
</script>
