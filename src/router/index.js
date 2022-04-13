import { createWebHashHistory, createRouter } from "vue-router";
import lab1 from '../pages/lab1.vue'
import lab3 from '../pages/lab3.vue'

const routes = [
  {
    path: "/",
    name: "Stream",
    component: lab1,
  },
  {
    path: "/RSA",
    name: "RSA",
    component: lab3,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
