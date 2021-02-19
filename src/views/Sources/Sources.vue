<template>
  <div class="sources">
    <h1>Sources</h1>
    <div class="sources__news__container">
      <Feed v-for="(article, i) of news" :key="i" :article="article" />
    </div>
  </div>
</template>

<script>
import { Feed } from "../../components";
import axios from "../../axios";
import endpoints from "../../endpoints";
export default {
  name: "Sources",
  components: {
    Feed,
  },
  data() {
    return {
      state: this.$store.state,
    };
  },
  computed: {
    query() {
      return this.state.query;
    },
    country() {
      return this.state.countryCode;
    },
    category() {
      return this.state.category;
    },
    news() {
      return this.state?.news;
    },
  },
  mounted() {
    (async () => {
      this.$store.commit("setNews", []);
      const res = await axios.get(`${endpoints.EVERYTHING}&q=food`);
      this.$store.commit("setNews", res.data?.articles);
    })();
  },
};
</script>

<style lang="scss">
.sources {
  padding: 10px;
  background: #f5f5f5 !important;
  h1 {
    width: 100%;
    font-size: 20px !important;
  }
  .sources__news__container {
    padding: 10px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}
</style>
