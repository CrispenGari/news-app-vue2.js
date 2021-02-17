<template>
  <div class="feed">
    <div class="feed__top">
      <h1>
        {{ article.title }}
      </h1>
      <p>
        {{ article.description }}
      </p>
    </div>
    <div class="feed__image">
      <img
        :src="
          article.urlToImage
            ? article.urlToImage
            : 'http://gamh.org/wp-content/uploads/2019/02/news.png'
        "
        alt="poster-placeholder"
      />
    </div>
    <div class="feed__main" v-show="article.content">
      {{ article.content }}
      <a :href="article.url">More</a>
    </div>

    <div class="feed__bottom">
      <p>{{ article.publishedA }}</p>
      <p>~~{{ article.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Feed",
  props: {
    article: Object,
  },
};
</script>

<style lang="scss">
.feed {
  background-color: white;
  margin: 5px;
  width: 100%;
  max-width: 400px;
  border-bottom: 1px solid lightgray;
  user-select: none;
  user-zoom: none;
  padding: 5px;
  border-radius: 5px;
  max-height: fit-content;
  .feed__top {
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 18px;
    }
    p {
      font-size: 15px;
      color: gray;
    }
  }
  .feed__main {
    font-size: 15px;
    margin: 5px 0;
    a {
      text-decoration: none;
      color: lightseagreen;
    }
  }
  .feed__image {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 300px;
      object-fit: contain;
      border-radius: 5px;
    }
  }
  .feed__bottom {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    p {
      color: gray;
      font-size: 15px;
    }
  }
}
</style>
