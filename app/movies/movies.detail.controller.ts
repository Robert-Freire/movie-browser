namespace app.movies {

    interface IMoviesDetailController {
        movie: app.model.IMovie;
    }

    class MoviesDetailController {
        public movie: app.model.IMovie;

        static $inject: Array<string> = ['moviesdataservice', '$rootScope'];

        constructor(
            private moviesdataservice: app.dataservices.IMoviesDataService,
            private $rootScope: ng.IRootScopeService) {

            this.movie = <app.model.IMovie>{ };

            this.$rootScope.$on(app.core.Events.LoadMovie, (event: ng.IAngularEvent, id: string) => {
                this.loadMovie(id);
            });
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