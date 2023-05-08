import HomeView from "../views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/survey-builder",
      name: "survey-builder",
      component: () => import("../views/SurveyBuilder.vue"),
    },
  ],
});

export default router;
