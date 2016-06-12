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
  
    public template = `
    <div class="summary-movie row"> 
    <span class="col-xs-5">
        <img ng-src="{{summary.imagesUrl}}{{summary.movie.backdrop_path}}">
    </span>
    <span class="col-xs-2">
    </span>
    <span class="col-xs-5">
        <div>
            <span class="summary-label">Title: </span>
            <a href="#/movies/{{summary.movie.id}}">
                <span class="summary-data">{{summary.movie.title}} </span>
            </a>
        </div>
        <div>
            <span class="summary-label">Tagline: </span>
            <span class="summary-data">{{summary.movie.tagline}} </span>
        </div>
        <div>
            <span class="summary-label">Vote average: </span>
            <span class="summary-data">{{summary.movie.vote_average}} </span>
        </div>
    </span>
</div>
    `
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
            console.log(this);
        };

    };

    private loadMovie(id: string) {
        this.moviesdataservice.get(id).then((data: IMovie) => {
            this.movie = data;
        });
    };
}