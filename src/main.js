import { createApp } from 'vue';
import { createPinia } from "pinia";

import App from '../apps/Main.vue';
import router from './router/main.js';

import "./index.css";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faLock, faHouse, faUser, faComment, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';

library.add(faEnvelope, faLock, faApple, faHouse, faUser, faComment, faGear, faRightFromBracket);

const app = createApp(App);
const pinia = createPinia();

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(pinia);
app.use(router);

app.mount('#app');
