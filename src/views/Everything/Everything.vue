<template>
  <div class="everything">
    <h1>Everything</h1>
    <div class="everything__news__container">
      <Feed v-for="(article, i) of news" :key="i" :article="article" />
    </div>
  </div>
</template>

<script>
import { Feed } from "../../components";
import axios from "../../axios";
import endpoints from "../../endpoints";
export default {
  name: "Everything",
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
      const res = await axios.get(`${endpoints.EVERYTHING}&q=sports`);
      this.$store.commit("setNews", res.data?.articles);
    })();
  },
};
</script>

<style lang="scss">
.everything {
  padding: 10px;
  background: #f5f5f5 !important;
  h1 {
    width: 100%;
    font-size: 20px !important;
  }
  .everything__news__container {
    padding: 10px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}
</style>
