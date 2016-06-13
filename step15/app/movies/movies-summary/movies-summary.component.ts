import { IMovie, IMoviesDataService } from '../../shared';
import { IMoviesListController } from '../movies-list';

interface IMoviesSummaryController {
    movie: IMovie;
}

/**
 * @desc Summary of the movie
 * @example <movIMoviesListControlleries-summary></movies-summary>
 */
export class MoviesSummary implements ng.IComponentOptions {
    public restrict = 'AE';
    public templateUrl = 'app/movies/movies-summary/movies-summary.tpl.html';
    public controller = MoviesSummaryController;
    public controllerAs = 'summary';

    public require = { 
        moviesList: '^moviesList'
    };
}

class MoviesSummaryController {
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
        };

    };

    private loadMovie(id: string) {
        this.moviesdataservice.get(id).then((data: IMovie) => {
            this.movie = data;
        });
    };
}