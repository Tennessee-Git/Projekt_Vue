<template>
  <nav class="navbarItems">
    <h1 class="navbar-logo">CinemApp<i class="fas fa-film"></i></h1>
    <ul class="nav-menu">
      <router-link class="nav-links" to="/">Strona główna</router-link>
      <router-link class="nav-links" to="/Seanse">Seanse</router-link>
      <router-link class="nav-links" to="/Filmy">Filmy</router-link>
      <router-link class="nav-links" to="/Sale">Sale</router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbarItems {
  background: linear-gradient(
    90deg,
    rgb(51, 150, 107) 0%,
    rgb(68, 196, 140) 100%
  );
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
}

.navbar-logo {
  color: #fff;
  justify-self: start;
  margin-left: 20px;
  cursor: default;
}

.fa-film {
  margin-left: 0.5rem;
  font-size: 1.6rem;
}

.nav-menu {
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 70vw;
  justify-content: end;
  margin-right: 2rem;
}

.nav-links {
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
}

.nav-links:hover {
  background-color: rgb(48, 136, 98);
  border-radius: 6px;
  transition: all 0.2s ease-out;
}

.fa-bars {
  color: #fff;
}

.menu-icon {
  display: none;
}

@media screen and (max-width: 900px) {
  .NavbarItems {
    font-size: 1rem;
  }

  .navbar-logo {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0%, 20%);
  }

  .fa-film {
    margin-left: 0.5rem;
    font-size: 1.4rem;
  }
}
</style>
