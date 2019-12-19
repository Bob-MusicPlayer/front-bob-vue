import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCog);
library.add(faHeart);
library.add(faTimes);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app');
