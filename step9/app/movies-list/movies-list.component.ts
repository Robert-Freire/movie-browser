interface IMovie{
    poster_path: string,
    title:string
}

export interface IMoviesListController{
    imagesUrl:string,
    movies: IMovie[]
}

class MoviesListController implements IMoviesListController {
    public imagesUrl:string;
    public movies: IMovie[];

    constructor (){
        var vm = this;

        this.imagesUrl = 'https://image.tmdb.org/t/p/w185/';
        this.movies = [{                
            poster_path: '/inVq3FRqcYIRl2la8iZikYYxFNR.jpg',
            title: 'Deadpool'},{                
            poster_path: '/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg',
            title: 'Zootopia'},{                
            poster_path: '/zSouWWrySXshPCT4t3UKCQGayyo.jpg',
            title: 'X-Men: Apocalypse'}
        ]
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

                                              
