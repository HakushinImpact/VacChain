import Vue from 'vue';
import App from './App.vue';
import '../node_modules/bulma/css/bulma.min.css'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Define icons to be used here
import {
  faSearch
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faSearch,
);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
