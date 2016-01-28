/// <reference path="movies.module.ts"/>
module app.movies {
    "use strict";

	interface IMoviesController {
        movies: app.model.IMovies;
        orderProp: string;
    }

	class MoviesController {
		public movies: app.model.IMovies[];
		public orderProp: string;

		constructor() {
			this.movies = [{
				overview: "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
				title: "Star Wars: The Force Awakens",
				release_date: new Date("2015-12-18"),
				popularity: 57.865219,
				vote_average: 7.84
			}, {
				overview: "A cryptic message from Bond’s past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.",
				title: "Spectre",
				release_date: new Date("2015-10-26"),
				popularity: 51.83321,
				vote_average: 6.32
			}, {
				overview: "In the 1820s, a frontiersman, Hugh Glass, sets out on a path of vengeance against those who left him for dead after a bear mauling.",
				title: "The Revenant",
				release_date: new Date("2015-12-25"),
				popularity: 44.097331,
				vote_average: 7.3
			}]

			this.orderProp = 'popularity';
		}
	}

	angular.module("app.movies")
        .controller("MoviesController", MoviesController);
}