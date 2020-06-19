import axios from "axios";

const api = axios.create({
  baseURL: `https://gateway.marvel.com/v1/public`,

  //https://gateway.marvel.com:443/v1/public/characters?orderBy=modified&limit=30&
});

export default api;
