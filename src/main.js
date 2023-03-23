import Vue from 'vue'
import App from './App.vue'
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser, faPen, faDesktop, faHouseDamage, faList, faCheck, faLocationArrow, faEnvelope ,faMarker} from '@fortawesome/free-solid-svg-icons';

import '@/styles/index.scss'


library.add(faUser, faPen, faDesktop, faHouseDamage, faList, faCheck, faLocationArrow, faEnvelope,faMarker)

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
