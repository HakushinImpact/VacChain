import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../App.vue';
import Dashboard from '../components/Dashboard';
import VaccRegForm from '../components/VaccRegForm';
import Manage from '../components/Manage';
import Login from '../components/Login';
import Home from '../components/Home';
import NotFound from '../components/NotFound';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    // Default route
    {
      path: '/',
      name: 'VacChain',
      component: App,
      children: [
        {
          path: '/login',
          name: 'Login',
          component: Login
        },
        {
          path: '/admin',
          name: 'Welcome',
          component: Home,
          children: [
            {
              path: '',
              name: 'Dashboard',
              component: Dashboard
            },
            {
              path: 'manage',
              name: 'Manage',
              component: Manage
            },
            {
              path: 'new',
              name: 'New Record',
              component: VaccRegForm
            }
          ]
        }
      ]
    },
    {
      path: '/404',
      name: '404 Not Found',
      component: NotFound
    },
    // Other routes or undefined routes redirects to home
    { path: '*', redirect: '/404' }
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
