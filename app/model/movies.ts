module app.model {
    "use strict";

	export interface IMovies {
        overview: string;
        title: string;
        release_date: Date;
        popularity: number;
        vote_average: number;
    }
}
