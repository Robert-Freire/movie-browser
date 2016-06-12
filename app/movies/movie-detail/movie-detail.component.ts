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
    public template = `<div >
    <img ng-src="{{detail.imagesUrl}}{{detail.movie.backdrop_path}}">
</div>
<br>
<div >
    <div>
        <span class="summary-label">Title: </span>
        <a href="#/movies/{{detail.movie.id}}" class="thumb">
            <span class="summary-data">{{detail.movie.title}} </span>
        </a>
    </div>
    <div>
        <span class="summary-label">Tagline: </span>
        <span class="summary-data">{{detail.movie.tagline}} </span>
    </div>
    <div>
        <span class="summary-label">Budget: </span>
        <span class="summary-data">{{detail.movie.budget}} </span>
    </div>
    <div>
        <span class="summary-label">Revenue: </span>
        <span class="summary-data">{{detail.movie.revenue}} </span>
    </div>
    <div>
        <span class="summary-label">Release date: </span>
        <span class="summary-data">{{detail.movie.release_date}} </span>
    </div>
    <div>
        <span class="summary-label">Vote average: </span>
        <span class="summary-data">{{detail.movie.vote_average}} </span>
    </div>
    <div>
        <span class="summary-label">Vote count: </span>
        <span class="summary-data">{{detail.movie.vote_count}} </span>
    </div>
    <div>
        <span class="summary-label">Home page: </span>
        <a href="{{detail.movie.homepage}}">
            <span class="summary-data">{{detail.movie.homepage}} </span>
        </a>
    </div>
    <div>
        <span class="summary-label">Overview: </span>
        <span class="summary-data">{{detail.movie.overview}} </span>
    </div>
</div>`
    public controller = MovieDetailController;
    public controllerAs = 'detail';
}    