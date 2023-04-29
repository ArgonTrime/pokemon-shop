import { pokemonApiConfig } from "api/config/pokemonApiConfig";

export const signUp = (body) => pokemonApiConfig.post("/auth/signup", body);
