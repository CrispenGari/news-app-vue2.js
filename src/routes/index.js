import Vue from "vue";
import VueRouter from "vue-router";

import { Top, Everything, Sources } from "../views";

Vue.use(VueRouter);
const routes = [
  { name: "Top", component: Top, path: "/" },
  { name: "Everything", component: Everything, path: "/everything" },
  { name: "Sources", component: Sources, path: "/sources" },
];

const route = new VueRouter({
  routes,
});

export default route;
