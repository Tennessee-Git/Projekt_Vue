<template>
  <div class="form-wrapper">
    <form @submit.prevent="handleSubmit">
      <div class="form-inputs">
        <label>Film:</label>
      </div>
      <div class="form-inputs">
        <label>Sala:</label>
      </div>
      <div class="form-inputs">
        <label>Data seansu:</label>
      </div>
      <button class="AddBtn FormButton">Dodaj</button>
    </form>
  </div>
</template>

<script>
import { addShowing } from "../../api";

export default {
  name: "AddShowingForm",
  data() {
    return {
      date: Date,
    };
  },
};
</script>
