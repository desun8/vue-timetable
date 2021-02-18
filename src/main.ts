import Vue from "vue";
import App from "./App.vue";
import { worker } from "@/mocks/browser.js";
import "./assets/styles/index.css";

Vue.config.productionTip = false;

worker.start();

new Vue({
  render: h => h(App)
}).$mount("#app");
