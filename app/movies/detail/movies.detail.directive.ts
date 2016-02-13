import { Events } from '../../core/events';
import { IMovie } from '../../model/movies';
import { IMoviesDataService } from '../../dataservices/movies.dataservice';
import { IMoviesListController } from '../list/movies.list.directive';

import './movies.detail.tpl.html';

interface IMoviesDetailController {
    movie: IMovie;
}

/**
 * @desc Detail of the movie
 * @example <movies-detail></movies-detail>
 */
export class MoviesDetail implements ng.IComponentOptions {
    public restrict = 'AE';
    public templateUrl = 'app/movies/detail/movies.detail.tpl.html';
    public controller = MoviesDetailController;
    public controllerAs = 'detail';
    // public bindings = {
    //     idMovie: '<'
    // };
    public require = {
        moviesList: '^moviesList'
    };

    public bindToController = true;

    public static Factory() {
        var moviesDetail = new MoviesDetail();
        return moviesDetail;
    }
}

class MoviesDetailController {
    public movie: IMovie;
    public imagesUrl: string;
    public $onInit: () => void;
    public moviesList: IMoviesListController;

    static $inject: Array<string> = ['moviesdataservice', '$rootScope', 'imagesDetailUrl'];

    constructor(
        private moviesdataservice: IMoviesDataService,
        private $rootScope: ng.IRootScopeService,
        imagesDetailUrl: string) {

        this.imagesUrl = imagesDetailUrl;
        this.movie = <IMovie>{};

        this.$onInit = function() {
            this.moviesList.onLoadMovie((idMovie: string) => {
                this.loadMovie(idMovie);
            });
  //          this.tabsCtrl.addPane(this);
            console.log(this);
        };
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