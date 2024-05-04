import { createApp } from 'vue'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-utilities.min.css';

import router from './router/index.js';

import App from './App.vue'

createApp(App).use(router).mount('#app')
