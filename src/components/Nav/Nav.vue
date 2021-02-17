<template>
  <div class="nav">
    <div class="nav__left">
      <h2 v-for="(category, i) in categories" :key="{ i }">{{ category }}</h2>
    </div>
    <form class="nav__right" @submit.prevent="searchNews">
      <div class="nav__right__search__input">
        <input type="text" placeholder="Search News..." v-model.trim="query" />
        <v-icon class="nav__right__icon">
          mdi-magnify
        </v-icon>
      </div>
      <h2>Select The Country Code</h2>
      <select v-model.lazy="country">
        <option v-for="(code, i) of countries" :value="code" :key="i">{{
          code
        }}</option>
      </select>
    </form>
  </div>
</template>

<script>
import NEWS_CONST from "../../utils";
export default {
  name: "Nav",
  data() {
    return {
      query: "",
      categories: NEWS_CONST.categories,
      countries: NEWS_CONST.countries,
      category: "",
      country: "za",
    };
  },
  methods: {
    searchNews() {
      this.$store.commit("setQuery", this.query);
      this.$store.commit("setCountryCode", this.country);
      this.$store.commit("setCategory", this.category);
    },
  },
};
</script>

<style lang="scss">
.nav {
  width: 100%;
  padding: 10px;
  background: black;
  color: white;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .nav__left {
    display: flex;
    flex: 0.7;
    flex-wrap: wrap;
    h2 {
      font-size: 14px;
      text-transform: uppercase;
      cursor: pointer;
      margin: 5px;
    }
    h2:hover {
      color: lightseagreen;
    }
  }
  .nav__right {
    flex: 0.3;
    margin-left: 5px;
    justify-content: flex-end;
    h2 {
      font-size: 13px;
      font-size: 14px;
      text-transform: uppercase;
      margin: 5px;
    }
    select {
      width: 80%;
      padding: 2px 5px;
      color: black !important;
      background-color: #f5f5f5;
      outline: none !important;
      border: none !important;
      border-radius: 5px;
    }
    .nav__right__search__input {
      background: #f5f5f5;
      display: flex;
      align-items: center;
      padding: 2px;
      border-radius: 5px;
      input {
        outline: none !important;
        border: none !important;
        padding: 0 5px;
        flex: 1;
      }
      .nav__right__icon {
        cursor: pointer !important;
      }
    }
  }
}
</style>
