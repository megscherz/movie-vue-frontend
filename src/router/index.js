import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import MoviesIndex from "../views/MoviesIndex.vue";
import MoviesNew from "../views/MoviesNew.vue";
import MoviesShow from "../views/MoviesShow.vue";
import MoviesEdit from "../views/MoviesEdit.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/movies", name: "MoviesIndex", component: MoviesIndex },
  { path: "/movies/new", name: "MoviesNew", component: MoviesNew },
  { path: "/movies/:id", name: "MoviesShow", component: MoviesShow },
  { path: "/movies/:id/edit", name: "MoviesEdit", component: MoviesEdit },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
