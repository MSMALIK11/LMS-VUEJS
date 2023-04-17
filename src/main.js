import { createApp } from 'vue'

import { createPinia } from 'pinia'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";


dom.watch();
import VueVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
import './index.css'
import App from './App.vue'
import router from './router'

import './assets/main.css'
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(VueVideoPlayer)
app.use(router)

app.mount('#app')
