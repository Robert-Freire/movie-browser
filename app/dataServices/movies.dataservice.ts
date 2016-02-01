/// <reference path="dataservices.module.ts"/>
namespace app.dataservices {
    'use strict';

    export interface IMoviesDataService {
        imagesUri: string;
        get: () => ng.IPromise<app.model.IMovies[]>;
    }

    class MoviesDataService implements IMoviesDataService {
        constructor(private $http: ng.IHttpService) {
        }

        private api_key: string = 'ba7dc0d5812ddda58e32b566e91d4688';
        public imagesUri: string = 'https://image.tmdb.org/t/p/w185/';

        public get(): ng.IPromise<app.model.IMovies[]> {
            var path = 'http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=' + this.api_key;

            return this.$http.get(path).success((data) => {
                return data.results;
            });
        }
    }
    angular.module('app.dataservices').service('moviesdataservice', MoviesDataService);
}