import { Events } from '../core/events';
import { IMovie } from '../model/movies';
import { IMoviesDataService } from '../dataservices/movies.dataservice';


export interface IMoviesListController {
    movies: IMovie;
    orderProp: string;
    imagesUrl: string;
    loadMovie(id: string): void;
}

export class MoviesListController {
    public movies: IMovie[] = [];
    public orderProp: string;
    public imagesUrl: string;

    static $inject: Array<string> = ['moviesdataservice', '$rootScope'];

    constructor(
        private moviesdataservice: IMoviesDataService,
        private $rootScope: ng.IRootScopeService) {

        this.moviesdataservice.getList().then((data: IMovie[]) => {
            this.movies = data;
        });

        this.orderProp = 'popularity';
        this.imagesUrl = this.moviesdataservice.imagesUrl;
    };

    public loadMovie(id: string) {
        this.$rootScope.$emit(Events.LoadMovie, id);
    }
}
    