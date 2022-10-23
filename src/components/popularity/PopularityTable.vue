<template>
  <div>
    <h2 class="heading">Tabela popularności filmów:</h2>
    <div class="popularity-item"></div>
  </div>
</template>

<script>
import { getShowingsFromLast7Days } from "../../api";

export default {
  name: "PopularityTable",
  data() {
    return {
      tableData: [],
    };
  },
  async created() {
    const showings = await getShowingsFromLast7Days();
    const setData = () => {
      let output = new Map();
      showings.forEach((showing) => {
        if (output.has(showing.movieTitle)) {
          let temp = output.get(showing.movieTitle);
          output.set(showing.movieTitle, temp + showing.seatsTaken.length);
        } else {
          output.set(showing.movieTitle, showing.seatsTaken.length);
        }
      });
      let array = Array.from(output, ([key, value]) => {
        return { movieTitle: key, ticketCount: value };
      });
      //   console.log(array);
      return array
        .sort((a, b) => (a.ticketCount <= b.ticketCount ? 1 : -1))
        .slice(0, 5);
    };
    this.tableData = setData();
  },
};
</script>
