import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MoviesView from "../views/MoviesView.vue";
import ShowingsView from "../views/ShowingsView.vue";
import RoomsView from "../views/RoomsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/Filmy",
      name: "movies",
      component: MoviesView,
    },
    {
      path: "/Seanse",
      name: "showings",
      component: ShowingsView,
    },
    {
      path: "/Sale",
      name: "rooms",
      component: RoomsView,
    },
  ],
});

export default router;
