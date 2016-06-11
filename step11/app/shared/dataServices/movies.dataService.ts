import { IMovie } from './../model';

/**
 * DataService o retrieve movies
 * Detailed information about the API used in http://docs.themoviedb.apiary.io/
 */
export interface IMoviesDataService {

    /**
     * Uri Path to the http server of the images
     * @type {string}
     */
    imagesUrl: string;

    /**
     * Returns a list of movies
     * @return {IPromise<IMovie[]>}      [List of movies]
     */
    getList():  ng.IPromise<IMovie[]>;
}

export class MoviesDataService implements IMoviesDataService {
    static $inject: Array<string> = ['$http', '$q', 'apiKey', 'imagesUrl', 'serverUrl'];

    constructor(
        private $http: ng.IHttpService,
        private $q: ng.IQService,
        private apiKey: string,
        public imagesUrl: string,
        private serverUrl: string) {
    }

    public getList(): ng.IPromise<IMovie[]> {
        var path = this.serverUrl + 'discover/movie?sort_by=popularity.desc&api_key=' + this.apiKey;

        var deferred = this.$q.defer();
        this.$http.get(path).success((data: any) => {
            deferred.resolve(data.results);
        });

        return deferred.promise;
    }
}

