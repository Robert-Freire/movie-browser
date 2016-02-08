import { MoviesList } from  './list/movies.list.directive';
//import { MoviesDetailController } from  './movies.detail.controller';
import { MoviesDetail } from  './detail/movies.detail.directive';

angular.module('app.movies', [])
	.directive('moviesList', MoviesList.Factory())
	.directive('moviesDirective', MoviesDetail.Factory());
//	.controller('MoviesDetailController', MoviesDetailController);

//(<any>angular).component('moviesDetail', MoviesDetail.Factory());