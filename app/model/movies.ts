namespace app.model {
    'use strict';

	export interface IMovies {
        poster_path: string;
        overview: string;
        title: string;
        release_date: Date;
        popularity: number;
        vote_average: number;
        original_title: string;
        original_language: string;
        backdrop_path: string;

    }
}
