import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../App.vue';
// import Form from '../components/Form.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    // Default route
    {
      path: '/',
      name: 'Home',
      component: App
    },
    // {
    //   path: '/dashboard',
    //   name: 'Dashboard',
    //   component: Dashboard
    // },
    // Default route
    // {
    //   path: '/new',
    //   name: 'New Record',
    //   component: Form
    // },
    // Other routes or undefined routes redirects to home
    { path: '*', redirect: '/' }
  ],
  // mode: 'history', //remove if production
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
