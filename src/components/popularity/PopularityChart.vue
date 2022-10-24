<template>
  <div>
    <h2 class="heading">Wykres popularności filmów:</h2>
    <div class="popularity-item">
      <BarChart :chartData="chartData" />
    </div>
  </div>
</template>

<script>
import { Chart, registerables } from "chart.js";
import { BarChart } from "vue-chart-3";
import { getShowingsFromLast7Days } from "../../api";

Chart.register(...registerables);

export default {
  name: "PopularityChart",
  data() {
    return {
      chartData: {},
    };
  },
  async created() {
    const showings = await getShowingsFromLast7Days();
    const setChart = () => {
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
      array = array
        .sort((a, b) => (a.ticketCount <= b.ticketCount ? 1 : -1))
        .slice(0, 5);
      let labels = array.map((element) => {
        return element.movieTitle;
      });
      let values = array.map((element) => {
        return element.ticketCount;
      });
      console.log("LABELS", labels);
      console.log("VALUES", values);
      return {
        labels: labels,
        datasets: [
          {
            label: "Ilość sprzedanych biletów z ostatnich 7 dni",
            data: values,
            borderColor: "rgb(102, 99, 139)",
            backgroundColor: "rgb(68, 196, 140)",
          },
        ],
      };
    };
    const chartData = setChart();

    this.chartData = chartData;
  },
  components: { BarChart },
};
</script>
