/// <reference path="movies.module.ts"/>
namespace app.movies {
    "use strict";

    interface IMoviesController {
        movies: app.model.IMovies;
        orderProp: string;
    }

    let $inject = ["$http"];

    class MoviesController {
        public movies: app.model.IMovies[] = [];
        public orderProp: string;

        constructor(private $http: ng.IHttpService) {
            let path = "http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ba7dc0d5812ddda58e32b566e91d4688";
            this.$http.get(path).success((data) => {
                this.movies = data.results;
            });
            this.orderProp = "popularity";
        };
    }

    angular.module("app.movies")
        .controller("MoviesController", MoviesController);
}