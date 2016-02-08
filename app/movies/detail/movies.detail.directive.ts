import { Events } from '../../core/events';
import { IMovie } from '../../model/movies';
import { IMoviesDataService } from '../../dataservices/movies.dataservice';

import './movies.detail.tpl.html';


interface IMoviesDetailController {
    movie: IMovie;
}

/**
 * @desc Detail of the movie
 * @example <plspHeader></plspHeader>
 */
export class MoviesDetail implements ng.IDirective {
    public restrict = 'AE';
    public templateUrl = 'app/movies/detail/movies.detail.tpl.html';
    public controller = MoviesDetailController;
    public controllerAs = 'moviesDetailCtrl';
    public bindToController = true;

    public static Factory() {
        var moviesDetail = () => new MoviesDetail();
        return moviesDetail;
    }
}

class MoviesDetailController {
    public movie: IMovie;

    static $inject: Array<string> = ['moviesdataservice', '$rootScope'];

    constructor(
        private moviesdataservice: IMoviesDataService,
        private $rootScope: ng.IRootScopeService) {

        this.movie = <IMovie>{};

        this.$rootScope.$on(Events.LoadMovie, (event: ng.IAngularEvent, id: string) => {
            this.loadMovie(id);
        });
    };

    private loadMovie(id: string) {
        this.moviesdataservice.get(id).then((data: IMovie) => {
            this.movie = data;
        });
    };
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
    