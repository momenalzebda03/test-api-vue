import { createRouter, createWebHistory } from "vue-router";
import PageWelcome from "../views/PageWelcome.vue";
import PageUsers from "../views/PageUsers.vue";
import updateadd from "@/components/ComponentUpdateAdd.vue";
import Pageupdate from "@/components/ComponentUpdateAdd.vue";

const routes = [
  {
    path: "/",
    name: "PageWelcome",
    component: PageWelcome,
    meta: {
      title: "Page welcome",
    },
  },
  {
    path: "/users",
    name: "users",
    component: PageUsers,
    meta: {
      title: "Page users",
    },
  },
  {
    path: "/update/:id",
    name: "update",
    component: Pageupdate,
    meta: {
      title: "Page update",
    },
  },
  {
    path: "/updateadd",
    name: "updateadd",
    component: updateadd,
    meta: {
      title: "Page update and add",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title ? to.meta.title : "Api Title";
  document.title = title;
  next();
});

export default router;
