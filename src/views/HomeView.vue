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
    <PopularityChart :showings="this.showingsFromLast7Days" />
    <PopularityTable :showings="this.showingsFromLast7Days" />
  </div>
</template>

<script>
import { getShowingsFromLast7Days, getShowingsNow } from "../api";
import ShowingsList from "../components/showing-components/ShowingsList.vue";
import ShowingDetails from "../components/showing-components/ShowingDetails.vue";
import PopularityChart from "../components/popularity/PopularityChart.vue";
import PopularityTable from "../components/popularity/PopularityTable.vue";
export default {
  name: "HomeView",
  async created() {
    try {
      const resN = await getShowingsNow();
      this.showingsNow = resN;
      const res7 = await getShowingsFromLast7Days();
      this.showingsFromLast7Days = res7;
    } catch (err) {
      console.error(err);
    }
  },
  data() {
    return {
      showingsNow: [],
      showingsFromLast7Days: [],
    };
  },
  components: {
    ShowingsList,
    ShowingDetails,
    PopularityChart,
    PopularityTable,
  },
};
</script>
