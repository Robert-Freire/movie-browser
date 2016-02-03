import { MoviesListController } from  './movies.list.controller';
import { MoviesDetailController } from  './movies.detail.controller';

angular.module('app.movies', [])
	.controller('MoviesListController', MoviesListController)
	.controller('MoviesDetailController', MoviesDetailController);
