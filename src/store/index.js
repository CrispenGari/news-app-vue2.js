import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    showNav: false,
    news: [],
    category: "",
    query: "",
    countryCode: "za",
  },
  mutations: {
    toggleNav(state) {
      state.showNav = !state.showNav;
    },
    setNews(state, payload) {
      state.news = payload;
    },
    setCountryCode(state, payload) {
      state.countryCode = payload;
    },
    setQuery(state, payload) {
      state.query = payload;
    },
    setCategory(state, payload) {
      state.category = payload;
    },
  },
});

export default store;
