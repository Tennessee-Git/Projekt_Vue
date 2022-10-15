<template>
  <div class="card-container">
    <div class="custom-grid">
      <div v-for="showing of showings" :key="showing.id">
        <ShowingDetails
          @delete-showing="$emit('delete-showing', showing.id)"
          :id="showing.id"
          :date="showing.date"
          :movieTitle="showing.movieTitle"
          :roomId="showing.roomId"
          :availableSeats="showing.availableSeats"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ShowingDetails from "./ShowingDetails.vue";

export default {
  name: "ShowingsList",
  props: {
    showings: Array,
  },
  components: { ShowingDetails },
  emits: ["delete-showing"],
};
</script>
