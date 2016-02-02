namespace app.dataservices {
    'use strict';

    export interface IMoviesDataService {
        imagesUri: string;
        get: () => ng.IPromise<app.model.IMovies[]>;
    }

    class MoviesDataService implements IMoviesDataService {
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
        }

        private api_key: string = 'ba7dc0d5812ddda58e32b566e91d4688';
        public imagesUri: string = 'https://image.tmdb.org/t/p/w185/';

        public get(): ng.IPromise<app.model.IMovies[]> {
            var path = 'http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=' + this.api_key;

            var deferred = this.$q.defer();
            this.$http.get(path).success((data: any) => {
                deferred.resolve(data.results);
            });

            return deferred.promise;
        }
    }
    angular.module('app.dataservices').service('moviesdataservice', MoviesDataService);
}