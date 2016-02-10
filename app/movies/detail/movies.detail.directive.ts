import { Events } from '../../core/events';
import { IMovie } from '../../model/movies';
import { IMoviesDataService } from '../../dataservices/movies.dataservice';

import './movies.detail.tpl.html';

interface IMoviesDetailController {
    movie: IMovie;
}

/**
 * @desc Detail of the movie
 * @example <movies-detail></movies-detail>
 */
export class MoviesDetail implements ng.IComponentOptions {
    public restrict = 'AE';
    public templateUrl = 'app/movies/detail/movies.detail.tpl.html';
    public controller = MoviesDetailController;
    public controllerAs = 'detail';

    public bindToController = true;

    public static Factory() {
        var moviesDetail = () => new MoviesDetail();
        return moviesDetail;
    }
}

class MoviesDetailController {
    public movie: IMovie;

    static $inject: Array<string> = ['moviesdataservice', '$rootScope'];

    constructor(
        private moviesdataservice: IMoviesDataService,
        private $rootScope: ng.IRootScopeService) {

        this.movie = <IMovie>{};

        this.$rootScope.$on(Events.LoadMovie, (event: ng.IAngularEvent, id: string) => {
            this.loadMovie(id);
        });
    };

    private loadMovie(id: string) {
        this.moviesdataservice.get(id).then((data: IMovie) => {
            this.movie = data;
        });
    };
}