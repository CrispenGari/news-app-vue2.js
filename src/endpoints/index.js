import API_KEY from "../keys";

const endpoints = {
  TOP_HEADLINES: `everything?&apiKey=${API_KEY}`,
  EVERYTHING: `top-headlines?&apiKey=${API_KEY}`,
  SOURCES: `sources?&apiKey=${API_KEY}`,
};

export default endpoints;
