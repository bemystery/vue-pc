import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = () => import("./pages/Home.vue");
const Todo = () => import("./pages/Todo.vue");
const Test = () => import("./pages/Test.vue");
const NotFound = () => import("./pages/NotFound.vue");

export const dynamicRoutes = [
  { path: "/notFound", component: NotFound },
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "/test",
        component: Test
      },
      {
        path: "/test12",
        component: Todo
      }
    ]
  },
  { path: "/todo", component: Todo, icon: "todo" }
];

const router = new VueRouter({
  mode: "history",
  routes: dynamicRoutes
});

export default router;
