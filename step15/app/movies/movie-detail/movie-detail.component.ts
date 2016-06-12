import {IMovie, IMoviesDataService} from './../../shared';

class MovieDetailController {
    static $inject: Array<string> = ['$routeParams', 'moviesdataservice', 'imagesDetailUrl'];
    private movie: IMovie = <IMovie>{};

    constructor (private $routeParams: angular.route.IRouteParamsService, private moviesdataservice: IMoviesDataService, private imagesUrl: string){

    	this.loadMovie($routeParams['movieId']);
    }

    private loadMovie(id: string) {
        this.moviesdataservice.get(id).then((data: IMovie) => {
            this.movie = data;
        });
    };
}

/**
 * @desc component to show a movies
 * @example <movies-detail></movies-detail>
 */
export class MovieDetail implements ng.IComponentOptions{
    public templateUrl = 'app/movies/movie-detail/movies-detail.tpl.html';
    public controller = MovieDetailController;
    public controllerAs = 'detail';
}    