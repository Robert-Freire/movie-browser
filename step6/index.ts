"use strict";
import * as angular from 'angular';
 
interface IMovie{
	poster_path: string,
	title:string
}

interface IMoviesListController{
	imagesUrl:string,
	movies: IMovie[]
}

class MoviesListController implements IMoviesListController {
	public imagesUrl:string;
	public movies: IMovie[];

	constructor (){
		var vm = this;

		this.imagesUrl = 'https://image.tmdb.org/t/p/w185/';
		this.movies = [{				
				poster_path: '/inVq3FRqcYIRl2la8iZikYYxFNR.jpg',
				title: 'Deadpool'},{				
				poster_path: '/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg',
				title: 'Zootopia'},{				
				poster_path: '/zSouWWrySXshPCT4t3UKCQGayyo.jpg',
				title: 'X-Men: Apocalypse'},
		]
	}
}

var moviesBrowserApp: ng.IModule = angular.module('moviesBrowserApp', []); 

moviesBrowserApp.controller("MoviesListController", MoviesListController);