import {IMovie} from './../model';
import {IMoviesDataService} from './../shared';


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
    public template = `<ul>
            <li ng-repeat="movie in $ctrl.movies">
                <img ng-src="{{$ctrl.imagesUrl}}{{movie.poster_path}}" title="{{movie.title}}">
                <div class="caption"> {{movie.title}} </div>
            </li>
        </ul>`;
    public controller = MoviesListController;     
}

                                              
