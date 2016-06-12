import {IMoviesDataService, IMovie} from './../shared';

export interface IMoviesListController{
    imagesUrl:string,
    movies: IMovie[]
}

class MoviesListController implements IMoviesListController {
    static $inject: Array<string> = ['imagesUrl', 'moviesdataservice'];
        
    public movies: IMovie[];
    private currentPage: number;

    constructor (public imagesUrl: string, 
                private moviesdataservice: IMoviesDataService){

        var vm = this;
        this.currentPage = 1;
        this.loadMoviesPage(this.currentPage);
    }

    public nextPage() {
        this.loadMoviesPage(++this.currentPage);
    }

    public previousPage(id: string) {
        this.loadMoviesPage(--this.currentPage);
    }

    private loadMoviesPage(page: number) {
        this.moviesdataservice.getList(this.currentPage).then((movies: IMovie[]) => {
            this.movies = movies;
        });
    }
}

/**
 * @desc component to show a list of movies
 * @example <movies-list></movies-list>>
 */
export class MoviesList implements ng.IComponentOptions{
    public template = `
         <span >
            <label for="search">Search: </label><input ng-model="$ctrl.query" id="search">
            <select ng-model="$ctrl.orderProp" id="sort">
                <option value="title">Alphabetical</option>
                <option value="popularity">Popularity</option>
                <option value="vote_average">Vote</option>                    
            </select>   
            <a ng-click="$ctrl.previousPage()" href="#" ><i class="fa fa-chevron-left" aria-hidden="true"></i></a>
            <a ng-click="$ctrl.nextPage()" href="#"><i class="fa fa-chevron-right" aria-hidden="true"></i></a>

        </span>
        <ul>
            <li ng-repeat="movie in $ctrl.movies | filter:$ctrl.query | orderBy:$ctrl.orderProp" class="movies">
                <img ng-src="{{$ctrl.imagesUrl}}{{movie.poster_path}}" title="{{movie.title}}">
                <div class="caption"> {{movie.title}} </div>
            </li>
        </ul>`;   
    public controller = MoviesListController;     
}                     
