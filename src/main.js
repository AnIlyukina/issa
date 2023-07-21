import { createApp } from 'vue'

import App from '../apps/Main.vue'
import router from './router/main.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

import "./index.css";

library.add(faEnvelope, faLock);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app');
