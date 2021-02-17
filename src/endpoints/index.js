import API_KEY from "../keys";

const endpoints = {
  EVERYTHING: `everything?apiKey=${API_KEY}&pageSize=100`,
  TOP_HEADLINES: `top-headlines?apiKey=${API_KEY}&pageSize=100`,
  SOURCES: `sources?apiKey=${API_KEY}&pageSize=100`,
};

export default endpoints;

// http://newsapi.org/v2/everything?apiKey=150acdfbe4964f5b94b9c5fab701191b&pageSize=100&country=za
// https://newsapi.org/v2/top-headlines?apiKey=150acdfbe4964f5b94b9c5fab701191b&pageSize=100&country=za
