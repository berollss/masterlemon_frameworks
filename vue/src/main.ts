import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

new Vue({
  vuetify : new Vuetify(),
  el: "#root",
  render: h => h(App),
});
