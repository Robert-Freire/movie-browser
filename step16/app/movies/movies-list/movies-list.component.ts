import {IMoviesDataService, IMovie} from './../../shared';

export interface IMoviesListController{
    imagesUrl:string,
    movies: IMovie[],
    onLoadMovie(handler: (idMovie: string) => void): void;
}

class MoviesListController implements IMoviesListController {
    static $inject: Array<string> = ['imagesUrl', 'moviesdataservice'];
        
    public movies: IMovie[];
    private currentPage: number;
    private showMovies: ((idMovie: string) => void)[] = [];

    constructor (public imagesUrl: string, 
                private moviesdataservice: IMoviesDataService){

        var vm = this;
        this.currentPage = 1;
        this.loadMoviesPage(this.currentPage);
    }

    public onLoadMovie(handler: (idMovie: string) => void): void {
        this.showMovies.push(handler);
    }

    public loadMovie (id: string) {
        this.showMovies.forEach((showMovie) => {
            showMovie(id);
        });
    };

    public nextPage() {
        this.loadMoviesPage(++this.currentPage);
    }

    public previousPage(id: string) {
        this.loadMoviesPage(--this.currentPage);
    }

    private loadMoviesPage(page: number) {
        this.moviesdataservice.getList(this.currentPage).then((movies: IMovie[]) => {
            this.movies = movies;
            this.loadMovie(movies[0].id);
        });
    }
}

/**
 * @desc component to show a list of movies
 * @example <movies-list></movies-list>>
 */
export class MoviesList implements ng.IComponentOptions{
    public template = `<div class="container-fluid">
    <div class="searchZone">
        <span class="titleZone">
            <h3> The Movie browser </h3>
        </span>
        <!--Search bar content-->
        <span class="pull-right">
            <label for="search">Search: </label><input ng-model="moviesListCtrl.query" id="search">
            <select ng-model="moviesCtrl.orderProp" id="sort">
                <option value="title">Alphabetical</option>
                <option value="popularity">Popularity</option>
                <option value="vote_average">Vote</option>                  
            </select>
            <a ng-click="moviesListCtrl.previousPage()" href="#"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>
            <a ng-click="moviesListCtrl.nextPage()" href="#"><i class="fa fa-chevron-right" aria-hidden="true"></i></a>
        </span>
    </div>
    <div >
        <!--Body content-->
        <div class="movies row"> 
            <div ng-repeat="movie in moviesListCtrl.movies | filter:moviesListCtrl.query  | orderBy:moviesListCtrl.orderProp" class=" col-xs-4 col-sm-3 col-md-2 col-lg-1"> 
                <div  class="thumbnail movie" ng-click="moviesListCtrl.loadMovie(movie.id)" >
                    <img ng-src="{{moviesListCtrl.imagesUrl}}{{movie.poster_path}}" title="{{movie.title}}">
                    <div> {{movie.title}} </div>
                </div>
            </div>
        </div>
    </div>
    <movies-summary></movies-summary> 
</div>`
    public controller = MoviesListController;
    public controllerAs = 'moviesListCtrl';
}                     

