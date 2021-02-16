import axios from "axios";
import API_KEY from "../keys";

const instance = axios.create({
  baseURL: `http://newsapi.org/v2/`,
});

export default instance;