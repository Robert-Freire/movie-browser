import * as angular from 'angular';
import { MoviesList } from  './movies-list'; 
import { MoviesDataService } from './shared';

import '../css/app.css';

var moviesBrowserApp: ng.IModule = angular.module('moviesBrowserApp', []); 


moviesBrowserApp
	.component('moviesList', new MoviesList ())
	.service('moviesdataservice', MoviesDataService)
	.constant('imagesUrl', 'https://image.tmdb.org/t/p/w185/')
	.constant('serverUrl', 'http://api.themoviedb.org/3/')
	.constant('apiKey', 'ba7dc0d5812ddda58e32b566e91d4688');

