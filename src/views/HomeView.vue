<template>
  <div class="heading">
    <h1>Najbliższe seanse:</h1>
  </div>
  <div class="card-container">
    <div class="custom-grid">
      <div v-for="showing of showingsNow" :key="showing.id">
        <ShowingDetails
          @delete-showing="$emit('delete-showing', showing.id)"
          :id="showing.id"
          :date="showing.date"
          :movieTitle="showing.movieTitle"
          :roomId="showing.roomId"
          :availableSeats="showing.availableSeats"
          :showDelete="false"
        />
      </div>
    </div>
  </div>
  <br />
  <div class="popularity">
    <PopularityChart />
    <PopularityTable />
  </div>
</template>

<script>
import { filterShowingsNow, getShowingsNow } from "../api";
import ShowingsList from "../components/showing-components/ShowingsList.vue";
import ShowingDetails from "../components/showing-components/ShowingDetails.vue";
import PopularityChart from "../components/popularity/PopularityChart.vue";
import PopularityTable from "../components/popularity/PopularityTable.vue";
export default {
  name: "HomeView",
  data() {
    return {
      showingsNow: [],
    };
  },
  async mounted() {
    this.showingsNow = await getShowingsNow();
  },
  components: {
    ShowingsList,
    ShowingDetails,
    PopularityChart,
    PopularityTable,
  },
};
</script>
