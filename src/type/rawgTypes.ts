export interface getGamesResponse {
    count: number;
    next: string;
    previous: string;
    results: Game[];
}

export interface Game {
    id: number;
    name: string;
    slug: string;
    released: string;
    background_image: string;
    rating: number;

    // rating_top: number;
    // platforms: Platform[];
    genres: Genres[];
    // short_screenshots: Screenshot[];
}
export interface Genres {
    id: number;
    name: string;
    slug: string;
    // games_count: number;
    // image_background: string;
}