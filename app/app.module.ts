/// <reference path="./dataservices/dataservices.module.ts"/>
/// <reference path="./movies/movies.module.ts"/>
namespace app {
	'use strict';

    angular.module('app', [
    	'app.dataservices',
    	'app.movies']);
}