<template>
  
  <div class="peage-container">
    <Navbar />
    <div class="content-wrap">
      <router-view />
    </div>
  </div>
  <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

import './assets/style.css'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  }
}
</script>

<style >
</style>
