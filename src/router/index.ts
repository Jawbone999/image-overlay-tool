import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { beforeGuard, afterGuard } from './guards';

Vue.use(VueRouter);

// Route-level code-splitting using lazy-loaded components
// Using components as functions that import the actual component code when called
// Reduces initial load time for the website by loading pages as-needed
// Code is sent to the browser in named webpack chunks (example: home.[hash].js)
const HomePage = () => import(/* webpackChunkName: "home" */ '../views/HomePage.vue');
const ErrorPage = () => import(/* webpackChunkName: "error" */ '../views/ErrorPage.vue');

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/error',
    name: 'Error',
    component: ErrorPage,
  },
  {
    path: '*',
    name: 'NotFound',
    component: ErrorPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach(beforeGuard);

router.afterEach(afterGuard);

export default router;
