import { createWebHashHistory, createRouter } from "vue-router";
import lab1 from '../pages/lab1.vue'
import lab2 from '../pages/lab2.vue'
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
  {
    path: "/Block",
    name: "Block",
    component: lab2,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
