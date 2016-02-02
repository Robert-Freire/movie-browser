namespace app.dataservices {

    /**
     * DataService o retrieve movies
     * Detailed information about the API used in http://docs.themoviedb.apiary.io/
     */
    export interface IMoviesDataService {

        /**
         * Uri Path to the http server of the images
         * @type {string}
         */
        imagesUri: string;

        /**
         * Returns a list of movies
         * @return {ng.IPromise<app.model.IMovie[]>} [List of movies]
         */
        getList(): ng.IPromise<app.model.IMovie[]>;

        /**
         * Returns the details of a movie
         * @param  {string}                          id [id of the movie to search]
         * @return {ng.IPromise<app.model.IMovie[]>}    [Data of the]
         */
        get(id: string): ng.IPromise<app.model.IMovie>;
    }

    class MoviesDataService implements IMoviesDataService {
        static $inject: Array<string> = ['$http', '$q'];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
        }

        private api_key: string = 'ba7dc0d5812ddda58e32b566e91d4688';
        public imagesUri: string = 'https://IMoviemdb.org/t/p/w185/';
        private serverUri: string = 'http://api.themoviedb.org/3/';
        public getList(): ng.IPromise<app.model.IMovie[]> {
            var path = this.serverUri + 'discover/movie?sort_by=popularity.desc&api_key=' + this.api_key;
// page
// sort_by original_title.asc, popularity.asc, vote_count.asc, vote_average.asc
            var deferred = this.$q.defer();
            this.$http.get(path).success((data: any) => {
                deferred.resolve(data.results);
            });

            return deferred.promise;
        }

        public get(id: string): ng.IPromise<app.model.IMovie> {
            var path = this.serverUri + 'discover/movie/' + id + '?api_key=' + this.api_key;

            var deferred = this.$q.defer();
            this.$http.get(path).success((data: app.model.IMovie) => {
                deferred.resolve(data);
            });

            return deferred.promise;
        }
    }
    angular
        .module('app.dataservices')
        .service('moviesdataservice', MoviesDataService);
}