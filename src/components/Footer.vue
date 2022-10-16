<template>
  <footer class="footer">
    <p class="footer_element">&copy;2022 Projekt Vue | All rights reserved</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  flex-shrink: 0;
  width: 100%;
  height: 40px;
  background-color: rgb(63, 185, 132);
  color: #fff;
  font-weight: bold;
  text-align: left;
  margin-top: 40px;
}

.footer_element {
  margin-top: 10px;
  padding-left: 10px;
}
</style>
