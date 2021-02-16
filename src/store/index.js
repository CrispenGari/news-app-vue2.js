import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    counter: 0,
  },
  mutations: {
    increment(state, payload) {
      state.counter += payload;
    },
  },
});

export default store;
