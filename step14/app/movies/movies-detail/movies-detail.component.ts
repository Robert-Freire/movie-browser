import { IMovie, IMoviesDataService } from '../../shared';
import { IMoviesListController } from '../movies-list';

interface IMoviesDetailController {
    movie: IMovie;
}

/**
 * @desc Detail of the movie
 * @example <movIMoviesListControlleries-detail></movies-detail>
 */
export class MoviesDetail implements ng.IComponentOptions {
    public restrict = 'AE';
    public templateUrl = 'app/movies/movies-detail/movies-detail.tpl.html';
    public controller = MoviesDetailController;
    public controllerAs = 'detail';

    public require = { 
        moviesList: '^moviesList'
    };
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
            console.log(this);
        };

    };

    private loadMovie(id: string) {
        this.moviesdataservice.get(id).then((data: IMovie) => {
            this.movie = data;
        });
    };
}