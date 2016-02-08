import { MoviesList } from  './list/movies.list.directive';
import { MoviesDetail } from  './detail/movies.detail.directive';

angular.module('app.movies', [])
	.directive('moviesList', MoviesList.Factory())
	.directive('moviesDetail', MoviesDetail.Factory());

//(<any>angular).component('moviesDetail', MoviesDetail.Factory());