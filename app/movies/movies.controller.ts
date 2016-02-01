/// <reference path="movies.module.ts"/>
namespace app.movies {
    'use strict';

    interface IMoviesController {
        movies: app.model.IMovies;
        orderProp: string;
    }

    class MoviesController {
        public movies: app.model.IMovies[] = [];
        public orderProp: string;
        public imagesUri: string;

        static $inject: Array<string> = ['moviesdataservice'];

        constructor(private moviesdataservice: app.dataservices.IMoviesDataService) {

            this.moviesdataservice.get().then((data: model.IMovies[]) => {
                this.movies = data;
            });

            this.orderProp = 'popularity';
            this.imagesUri = this.moviesdataservice.imagesUri;
        };
    }

    angular.module('app.movies')
        .controller('MoviesController', MoviesController);
}