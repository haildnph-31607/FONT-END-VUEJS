import { createApp } from "vue";
import { createPinia } from 'pinia'
import axios from "axios";

window.axios = axios;
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap-utilities.min.css";
import { Menu,
        Table,
         List,
         Drawer,
         Button,
         Card,
         message } from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import router from "./router/index.js";

import App from "./App.vue";

createApp(App)
.use(createPinia())
  .use(router)
  .use(Card)
  .use(Table)
  .use(Button)
  .use(Drawer)
  .use(List)
  .use(Menu)
  .mount("#app");
app.config.globalProperties.$message = message;
