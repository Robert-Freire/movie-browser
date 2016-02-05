import { MoviesList } from  './list/movies.list.directive';
import { MoviesDetailController } from  './movies.detail.controller';

angular.module('app.movies', [])
	.directive('moviesList', MoviesList.Factory())
	.controller('MoviesDetailController', MoviesDetailController);
