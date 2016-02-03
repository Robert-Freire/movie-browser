namespace app.movies {

    interface IMoviesListController {
        movies: app.model.IMovie;
        orderProp: string;
    }

    class MoviesListController {
        public movies: app.model.IMovie[] = [];
        public orderProp: string;
        public imagesUri: string;

        static $inject: Array<string> = ['moviesdataservice'];

        constructor(private moviesdataservice: app.dataservices.IMoviesDataService) {

            this.moviesdataservice.getList().then((data: model.IMovie[]) => {
                this.movies = data;
            });

            this.orderProp = 'popularity';
            this.imagesUri = this.moviesdataservice.imagesUri;
        };
    }

    angular.module('app.movies')
        .controller('MoviesListController', MoviesListController);
}