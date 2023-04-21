import axios from "axios";

import LocalStorageService from "services/LocalStorageService";

const config = {
  baseURL: "http://localhost:3001/",
};

export const pokemonApiConfig = axios.create(config);
pokemonApiConfig.interceptors.request.use((config) => {
  const accessToken = LocalStorageService.getToken();
  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});
