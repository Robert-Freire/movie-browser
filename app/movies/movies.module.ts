import { MoviesList } from  './list/movies.list.directive';
import { MoviesDetail } from  './detail/movies.detail.directive';

angular.module('app.movies', [])
    .component('moviesList', MoviesList.Factory())
    .component('moviesDetail', MoviesDetail.Factory());