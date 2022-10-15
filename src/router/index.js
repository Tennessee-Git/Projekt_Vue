import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MoviesView from "../views/MoviesView.vue";
import ShowingsView from "../views/ShowingsView.vue";
import RoomsView from "../views/RoomsView.vue";
import EditMovieForm from "../components/forms/EditMovieForm.vue";
import EditShowingForm from "../components/forms/EditShowingForm.vue";
import EditRoomForm from "../components/forms/EditRoomForm.vue";
import ReservationForm from "../components/forms/ReservationForm.vue";

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
    {
      path: "/EdytujFilm/:id",
      name: "editMovie",
      component: EditMovieForm,
    },
    {
      path: "/EdytujSeans/:id",
      name: "editShowing",
      component: EditShowingForm,
    },
    {
      path: "/EdytujSale/:id",
      name: "editRoom",
      component: EditRoomForm,
    },
    {
      path: "/Rezerwuj/:id",
      name: "reservation",
      component: ReservationForm,
    },
  ],
});

export default router;
