import axios from "axios";
const apikey = "9bfc4efda5e11865aab4ab84b6dba4a9";
const hash = "2ca97ce2c9fcd13830a5a6228d2f76e0";

const api = axios.create({
  baseURL: `https://gateway.marvel.com/v1/public/characters?orderBy=modified&limit=30&ts=1&apikey=${apikey}&hash=${hash}`,

  //https://gateway.marvel.com:443/v1/public/characters?orderBy=modified&limit=30&
});

export default api;
