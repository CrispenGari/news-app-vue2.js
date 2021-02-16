<template>
  <v-app>
    <v-main>
      <div class="app">
        <Header />
        <div class="app__main"></div>
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { Header } from "./components";

export default {
  name: "App",

  components: {
    Header,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
.app {
  .app__main {
  }
}
</style>
