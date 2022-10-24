<template>
  <div class="showing-card">
    <div class="showing-details">
      <div class="showing-date">{{ date }}</div>
      <div class="showing-title">{{ movieTitle.toUpperCase() }}</div>
      <div class="showing-room">Sala {{ roomId }}</div>
      <div class="showing-seats">{{ availableSeats }} wolnych miejsc</div>
    </div>
    <div class="overlay">
      <div class="inner-card-controls">
        <router-link :to="{ name: 'editShowing', params: { id: this.id } }">
          <button class="ctrl-btn">
            <i class="far fa-edit"></i>
          </button>
        </router-link>
        <router-link :to="{ name: 'reservation', params: { id: this.id } }">
          <button class="ctrl-btn ctrl-btn-small">
            Rezerwuj <i class="fas fa-ticket-alt"></i>
          </button>
        </router-link>
        <button
          v-if="showDelete"
          class="ctrl-btn"
          @click="$emit('delete-showing', id)"
        >
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowingDetails",
  props: {
    id: Number,
    date: String,
    movieTitle: String,
    roomId: Number,
    availableSeats: Number,
    showDelete: Boolean,
  },
};
</script>

<style scoped>
.showing-card {
  width: 200px;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  border: 0;
  display: block;
  font-weight: bold;
}

.showing-card .overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 95%;
  height: 96%;
  border: 5px solid transparent;
  transition: all 0.4s ease;
}

.showing-card:hover .overlay {
  border: 5px solid rgb(68, 196, 140);
}

.inner-card-controls {
  position: absolute;
  left: 2%;
  opacity: 0;
  text-decoration: none;
  color: white;
}

.showing-card:hover .inner-card-controls {
  opacity: 1;
  visibility: visible;
  transition: all 0.4s ease;
  position: absolute;
}

.showing-details {
  display: block;
  text-align: center;
  justify-content: center;
  background-color: rgb(167, 236, 206);
  width: 200px;
  height: 250px;
}

.showing-title {
  text-shadow: rgb(0, 0, 0) 1px 1px 5px;
  color: white;
  background-color: transparent;
  text-align: center;
  position: absolute;
  bottom: 130px;
  left: 5px;
  width: 190px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.showing-date {
  text-shadow: rgb(0, 0, 0) 1px 1px 5px;
  color: white;
  text-align: center;
  position: absolute;
  bottom: 170px;
  left: 5px;
  width: 190px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.showing-room {
  text-shadow: rgb(0, 0, 0) 1px 1px 5px;
  color: white;
  text-align: center;
  position: absolute;
  bottom: 90px;
  left: 5px;
  width: 190px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.showing-seats {
  text-shadow: rgb(0, 0, 0) 1px 1px 5px;
  color: white;
  text-align: center;
  position: absolute;
  bottom: 50px;
  left: 5px;
  width: 190px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
