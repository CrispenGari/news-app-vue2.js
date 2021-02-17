<template>
  <v-app>
    <v-main>
      <div class="app">
        <Header />

        <Nav v-if="showNav" />
        <div class="app__main"></div>
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { Header, Nav } from "./components";

export default {
  name: "App",
  components: {
    Header,
    Nav,
  },

  data() {
    return {
      state: this.$store.state,
    };
  },
  computed: {
    showNav() {
      return this.state.showNav;
    },
  },
};
</script>
<style lang="scss">
.app {
  .app__main {
  }
}
</style>
