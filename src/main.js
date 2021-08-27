import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import '../node_modules/bulma/css/bulma.min.css';

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Define icons to be used here
import {
  faSearch,
  faPlus,
  faSignOutAlt,
  faUser,
  faLock,
  faEdit
} from '@fortawesome/free-solid-svg-icons';

library.add(faSearch, faPlus, faSignOutAlt, faUser, faLock, faEdit);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
