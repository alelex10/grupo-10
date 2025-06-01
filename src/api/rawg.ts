import type { getGamesResponse } from "../type/rawgTypes";

// src/api/rawg.js
export const API_KEY = "a707fb0dd76f4b69a37f1cb57a7ab2f4";
export const BASE_URL = "https://api.rawg.io/api";

export async function getGames(params = ""): Promise<getGamesResponse> {
	const response = await fetch(`${BASE_URL}/games?key=${API_KEY}&${params}`);
	if (!response.ok) {
		throw new Error("Error al obtener los juegos");
	}
	return await response.json();
}
