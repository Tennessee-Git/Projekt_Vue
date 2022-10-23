<template>
  <div class="room">
    <div class="screen">Ekran</div>
    <div class="seat-grid">
      <input
        v-for="code of seatCodes"
        type="checkbox"
        id="{{code}}"
        value="{{code}}"
        @click="$emit('select-seat', code)"
        :disabled="seatTaken(code)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    capacity: Number,
    seatsTaken: Array,
  },
  name: "room",
  created() {
    this.seatCodes = this.createSeatCodes(this.capacity);
  },
  data() {
    return {
      seatCodes: [],
    };
  },
  methods: {
    createSeatCodes(capacity) {
      let array = [];
      for (let i = 0; i < capacity / 10; i++) {
        let letter = String.fromCharCode(i + 65);
        for (let j = 1; j < 11; j++) {
          array.push(`${letter}-${j}`);
        }
      }
      return array;
    },
    seatTaken(code) {
      if (this.seatsTaken.includes(code)) return true;
      else return false;
    },
  },
};
</script>

<style scoped>
.screen {
  width: 550px;
  background-color: #e4e4e4;
  color: #898989;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 3px 0;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5%;
}

.screen:hover {
  cursor: default;
}

input[type="checkbox"] {
  margin: 5px auto;
}

input[type="checkbox"]:disabled {
  cursor: default;
}

.seat-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  row-gap: 5px;
}

.room {
  display: flex;
  flex-direction: column;
  margin: 10px auto;
}
</style>
