"use strict";
import * as angular from 'angular';
import { MoviesList } from  './movies-list.component'; 

var moviesBrowserApp: ng.IModule = angular.module('moviesBrowserApp', []); 


moviesBrowserApp.component('moviesList', new MoviesList ());