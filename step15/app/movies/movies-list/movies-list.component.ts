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
    public templateUrl = 'app/movies/movies-list/movies-list.tpl.html';
    public controller = MoviesListController;
    public controllerAs = 'moviesListCtrl';
}                     

