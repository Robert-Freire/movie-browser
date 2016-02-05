import { Events } from '../../core/events';
import { IMovie } from '../../model/movies';
import { IMoviesDataService } from '../../dataservices/movies.dataservice';

import './movies.list.tpl.html';

interface IMoviesListController {
    movies: IMovie;
    orderProp: string;
    imagesUrl: string;
    loadMovie(id: string): void;
    nextPage(): void;
    previousPage(): void;
}

/**
 * @desc main layout for the app
 * @example <plspHeader></plspHeader>
 */
export class MoviesList implements ng.IDirective {
    public restrict = 'AE';
    public templateUrl = 'app/movies/list/movies.list.tpl.html';
    public controller = MoviesListController;
    public controllerAs = 'moviesListCtrl';
    public bindToController = true;

    public static Factory() {
        var moviesList = () => new MoviesList();
        return moviesList;
    }
}

class MoviesListController {
    public movies: IMovie[] = [];
    public orderProp: string;
    public imagesUrl: string;
    private currentPage: number = 1;

    static $inject: Array<string> = ['moviesdataservice', '$rootScope'];

    constructor(
        private moviesdataservice: IMoviesDataService,
        private $rootScope: ng.IRootScopeService) {

        this.orderProp = 'popularity';
        this.imagesUrl = this.moviesdataservice.imagesUrl;

        this.loadMoviesPage(this.currentPage);
    };

    public loadMovie(id: string) {
        this.$rootScope.$emit(Events.LoadMovie, id);
    }

    public nextPage() {
        this.loadMoviesPage(++this.currentPage);
    }

    public previousPage(id: string) {
        this.loadMoviesPage(--this.currentPage);
    }

    private loadMoviesPage(page: number) {
        this.moviesdataservice.getList(this.currentPage).then((data: IMovie[]) => {
            this.movies = data;
        });
    }
}
    