import {IMoviesDataService, IMovie} from './../shared';

export interface IMoviesListController{
    imagesUrl:string,
    movies: IMovie[]
}

class MoviesListController implements IMoviesListController {
    static $inject: Array<string> = ['imagesUrl', 'moviesdataservice'];
        
    public movies: IMovie[];

    constructor (public imagesUrl: string, 
                private moviesdataservice: IMoviesDataService){

        var vm = this;

        this.moviesdataservice.getList().then ( (movies:IMovie[]) =>{
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
        </span>
        <ul>
            <li ng-repeat="movie in $ctrl.movies | filter:$ctrl.query | orderBy:$ctrl.orderProp"">
                <img ng-src="{{$ctrl.imagesUrl}}{{movie.poster_path}}" title="{{movie.title}}">
                <div class="caption"> {{movie.title}} </div>
            </li>
        </ul>`;   
    public controller = MoviesListController;     
}

                                              
