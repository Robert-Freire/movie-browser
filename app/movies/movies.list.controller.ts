namespace app.movies {

    interface IMoviesListController {
        movies: app.model.IMovie;
        orderProp: string;
        loadMovie(id: string): void;
    }

    class MoviesListController {
        public movies: app.model.IMovie[] = [];
        public orderProp: string;
        public imagesUri: string;

        static $inject: Array<string> = ['moviesdataservice', '$rootScope'];

        constructor(
            private moviesdataservice: app.dataservices.IMoviesDataService,
            private $rootScope: ng.IRootScopeService) {

            this.moviesdataservice.getList().then((data: model.IMovie[]) => {
                this.movies = data;
            });

            this.orderProp = 'popularity';
            this.imagesUri = this.moviesdataservice.imagesUri;
        };

        public loadMovie(id: string) {
            this.$rootScope.$emit(app.core.Events.LoadMovie, id);
        }
    }

    angular.module('app.movies')
        .controller('MoviesListController', MoviesListController);
}