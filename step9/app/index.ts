import * as angular from 'angular';
import { MoviesList } from  './movies-list'; 

var moviesBrowserApp: ng.IModule = angular.module('moviesBrowserApp', []); 


moviesBrowserApp.component('moviesList', new MoviesList ());