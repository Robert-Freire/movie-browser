namespace app.movies {

    interface IMoviesDetailController {
        movie: app.model.IMovie;
    }

    class MoviesDetailController {
        public movie: app.model.IMovie;

        static $inject: Array<string> = ['moviesdataservice'];

        constructor(private moviesdataservice: app.dataservices.IMoviesDataService) {
            this.movie = <app.model.IMovie>{ };
        };

        private loadMovie (id: string) {
            this.moviesdataservice.get(id).then((data: model.IMovie) => {
                this.movie = data;
            });
        };
    }

    angular.module('app.movies')
        .controller('MoviesDetailController', MoviesDetailController);
}