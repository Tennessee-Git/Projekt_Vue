<template>
  <div>
    <h2 class="heading">Tabela popularności filmów:</h2>
    <table>
      <tr>
        <th>Tytuł filmu</th>
        <th>Ilość sprzedanych biletów</th>
      </tr>
      <tr v-for="data of tableData">
        <td>{{ data.movieTitle }}</td>
        <td>{{ data.ticketCount }}</td>
      </tr>
    </table>
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

<style scoped>
table {
  max-width: 700px;
  min-width: 500px;
  margin: 0 auto;
  text-align: center;
  border-collapse: collapse;
  border-style: hidden;
}
table th {
  width: 50%;
  padding: 10px;
  background-color: rgb(68, 196, 140);
  border: 1px solid rgba(212, 212, 212, 0.9);
}
table td {
  padding: 10px;
  border: 1px solid rgba(212, 212, 212, 0.9);
}
</style>
