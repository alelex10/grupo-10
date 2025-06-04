import type { getGamesResponse } from "../type/rawgTypes";

// src/api/rawg.js
export const API_KEY = "a707fb0dd76f4b69a37f1cb57a7ab2f4";
export const BASE_URL = "https://api.rawg.io/api";

export async function getGames(params = "", endpoit = "games"): Promise<getGamesResponse> {
	const response = await fetch(`${BASE_URL}/${endpoit}?key=${API_KEY}&${params}`);
	if (!response.ok) {
		throw new Error("Error al obtener los juegos");
	}
	return await response.json();
}
export async function getGameMostPopular() {
	return await getGames("&ordering=-added");
}
export async function getGameNews() {
	return await getGames("&dates=2025-04-25,2025-05-25&ordering=-released");
}
