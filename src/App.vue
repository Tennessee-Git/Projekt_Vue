<template>
  <div class="page-container">
    <Navbar />
    <div class="content-wrap">
      <router-view />
    </div>
  </div>
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style></style>
