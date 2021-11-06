import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { routePath } from "./routes";

Vue.use(VueRouter);

const routes = [
	{
		path: routePath.homepage,
		name: "Home",
		component: Home,
	},
	{
		path: `${routePath.news}/:category`,
		name: "Category",
		component: () =>
		import(/* webpackChunkName: "business" */ "../views/Category.vue"),
	}
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router