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
     * @param  {number}                page [The page to retrive (1 if nothing is indicated)]
     * @return {ng.IPromise<IMovie[]>}      [List of movies]
     */
    getList(): ng.IPromise<IMovie[]>;
    getList(page: number): ng.IPromise<IMovie[]>;

    /**
     * Returns the details of a movie
     * @param  {string}                          id [id of the movie to search]
     * @return {ng.IPromise<app.model.IMovie[]>}    [Data of the]
     */
    get(id: string): ng.IPromise<IMovie>;
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

    public getList(page: number = 1): ng.IPromise<IMovie[]> {
        var path = this.serverUrl + 'discover/movie?sort_by=popularity.desc&api_key=' + this.apiKey + '&page=' + page;

        var deferred = this.$q.defer();
        this.$http.get(path).success((data: any) => {
            deferred.resolve(data.results);
        });

        return deferred.promise;
    }

    public get(id: string): ng.IPromise<IMovie> {
        var path = this.serverUrl + 'movie/' + id + '?api_key=' + this.apiKey;

        var deferred = this.$q.defer();
        this.$http.get(path).success((data: IMovie) => {
            deferred.resolve(data);
        });

        return deferred.promise;
    }
}

