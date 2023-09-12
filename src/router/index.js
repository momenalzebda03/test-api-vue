import { createRouter, createWebHistory } from "vue-router";
import NavbarView from "../views/PageNavbar.vue";

const routes = [
  {
    path: "/",
    name: "Navbar",
    component: NavbarView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
