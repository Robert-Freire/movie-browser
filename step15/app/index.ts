import * as angular from 'angular';
import * as ngRoute from 'angular-route';

import { MoviesList, MoviesSummary, MovieDetail } from  './movies'; 
import { MoviesDataService } from './shared';
import routing from './app.config';

import '../css/app.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';


var moviesBrowserApp: ng.IModule = angular.module('moviesBrowserApp', [ngRoute]); 

moviesBrowserApp
	.config(routing)
	.component('moviesList', new MoviesList ())
	.component('moviesSummary', new MoviesSummary ())
	.component('movieDetail', new MovieDetail ())
	.service('moviesdataservice', MoviesDataService)
	.constant('imagesUrl', 'https://image.tmdb.org/t/p/w185/')
	.constant('serverUrl', 'http://api.themoviedb.org/3/')
	.constant('apiKey', 'ba7dc0d5812ddda58e32b566e91d4688')
	.constant('imagesDetailUrl', 'https://image.tmdb.org/t/p/w500/');

