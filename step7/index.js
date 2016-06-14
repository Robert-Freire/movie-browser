"use strict";
var angular = require('angular');
var MoviesListController = (function () {
    function MoviesListController() {
        var vm = this;
        this.imagesUrl = 'https://image.tmdb.org/t/p/w185/';
        this.movies = [{
                poster_path: '/inVq3FRqcYIRl2la8iZikYYxFNR.jpg',
                title: 'Deadpool' }, {
                poster_path: '/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg',
                title: 'Zootopia' }, {
                poster_path: '/zSouWWrySXshPCT4t3UKCQGayyo.jpg',
                title: 'X-Men: Apocalypse' }
        ];
    }
    return MoviesListController;
}());
var moviesBrowserApp = angular.module('moviesBrowserApp', []);
moviesBrowserApp.controller("MoviesListController", MoviesListController);
