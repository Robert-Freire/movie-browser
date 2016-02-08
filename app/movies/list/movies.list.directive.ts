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

// interface IMoviesListScope extends ng.IScope {
//     loadMovie(id: string): void;
// }


/**
 * @desc component to show a list of movies
 * @example <movies-list></movies-list>>
 */
export class MoviesList implements ng.IDirective {
    public restrict = 'AE';
    public templateUrl = 'app/movies/list/movies.list.tpl.html';
    public controller = MoviesListController;
    public controllerAs = 'moviesListCtrl';
    public bindToController = true;
//    public link: ng.IDirectiveLinkFn;

    constructor() {
/*        this.link = (scope: IMoviesListScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
            scope.loadMovie = (id: string) => {
                scope.$emit(Events.LoadMovie, id);
            };
        };*/
    }

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

    public loadMovie (id: string) {
        this.$rootScope.$emit(Events.LoadMovie, id);
    };

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
    