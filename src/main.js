import { createApp } from 'vue';
import App from './App.vue';
import router from "@/router/index.js";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHeart, faHand, faAddressBook, faCreditCard, faLemon, faHourglass } from '@fortawesome/free-regular-svg-icons'


/* add icons to the library */
library.add([faHeart, faHand, faAddressBook, faCreditCard, faLemon, faHourglass]);

const app = createApp(App);

app
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
