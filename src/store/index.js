import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

import localStorage from "./modules/localStorage";

const KEY = "vue-demo";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: KEY,
  modules: ["localStorage"]
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { localStorage },
  plugins: [vuexLocal.plugin]
});
