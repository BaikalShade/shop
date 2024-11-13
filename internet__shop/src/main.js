import Vue, { createApp } from "vue";
import App from "./App.vue";
// import router from "./router";
import store from "./store/store";

import "../public/normalize.css";

// createApp(App).use(store).mount("#app");
new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
