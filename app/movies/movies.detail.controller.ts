import { Events } from '../core/events';
import { IMovie } from '../model/movies';
import { IMoviesDataService } from '../dataservices/movies.dataservice';

export interface IMoviesDetailController {
    movie: IMovie;
}

export class MoviesDetailController {
    public movie: IMovie;

    static $inject: Array<string> = ['moviesdataservice', '$rootScope'];

    constructor(
        private moviesdataservice: IMoviesDataService,
        private $rootScope: ng.IRootScopeService) {

        this.movie = <IMovie>{ };

        this.$rootScope.$on(Events.LoadMovie, (event: ng.IAngularEvent, id: string) => {
            this.loadMovie(id);
        });
    };

    private loadMovie (id: string) {
        this.moviesdataservice.get(id).then((data: IMovie) => {
            this.movie = data;
        });
    };
}
