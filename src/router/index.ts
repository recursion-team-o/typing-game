import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/game",
      name: "game",
      component: () => import("../views/GameView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/result",
      name: "result",
      component: () => import("../views/ResultView.vue"),
    },
    {
      path: "/newHome",
      name: "newHome",
      component: () => import("../views/newHomeView.vue"),
    },
    {
      path: "/newGame",
      name: "newGame",
      component: () => import("../views/newGameView.vue"),
    },
    {
      path: "/newResult",
      name: "newResult",
      component: () => import("../views/newResultView.vue"),
    },
  ],
});

export default router;
