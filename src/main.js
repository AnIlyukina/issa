import { createApp } from 'vue'

import App from '../apps/Main.vue'
import router from './router/main.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faLock, faHouse, faUser, faComment, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons'
import "./index.css";

library.add(faEnvelope, faLock, faApple, faHouse, faUser, faComment, faGear, faRightFromBracket);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app');
