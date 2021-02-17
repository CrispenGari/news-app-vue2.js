<template>
  <div class="header">
    <div class="header__left">
      <div
        class="header__nav__toggle"
        title="show nav"
        @mouseenter="toggleNav()"
        @click="toggleNav()"
      >
        <v-icon class="header__left__icon">
          mdi-menu
        </v-icon>
      </div>
      <div class="header__left__logo">
        <v-icon class="header__left__icon">
          mdi-newspaper
        </v-icon>
        <h1>News</h1>
      </div>
    </div>
    <div class="header__right">
      <router-link to="/">Top</router-link>
      <router-link to="/everything">Everything</router-link>
      <router-link to="/sources">Sources</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  methods: {
    toggleNav() {
      this.$store.commit("toggleNav");
    },
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid lightgray;
  padding: 10px;
  user-select: none;
  user-zoom: none;
  .header__left {
    display: flex;
    align-items: center;
    cursor: pointer;
    h1 {
      text-transform: uppercase;
      font-size: 20px;
      font-size: 500;
    }
    .header__left__icon {
      color: lightseagreen !important;
      margin-right: 2px;
    }
    .header__left__logo {
      display: flex;
      align-items: center;
      margin-left: 5px;
    }
  }
  .header__right {
    display: flex;
    align-items: center;
    a {
      color: white !important;
      text-decoration: none;
      font-size: 16px;
      font-weight: 500;
      text-transform: uppercase;

      margin-left: 8px;
      cursor: pointer;
    }
  }
}
</style>
