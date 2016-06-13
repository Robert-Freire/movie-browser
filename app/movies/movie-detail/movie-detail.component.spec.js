"use strict";

describe('MoviesDetail', function() {

 	var moviesDefer;
  	var ctrl;
  	var $rootScope;
  	var currentPage;
  	var movieId;
  	var calledMovieId;

	beforeEach(module('moviesBrowserApp'));

  	beforeEach(inject(function($componentController, $q, _$rootScope_){
	  	moviesDefer = $q.defer();
	  	movieId = 'Any movie id';

	  	var moviesDataServiceMock = {
	  		get: function (id){
	  			calledMovieId = id;
	  			return moviesDefer.promise;
	  		}
	  	}
	    ctrl = $componentController('movieDetail', {
	    	$routeParams: {'movieId': movieId},
	    	moviesdataservice: moviesDataServiceMock
	    });
	    $rootScope = _$rootScope_
  	}));

	describe ('MoviesDetailController', function (){

	  	it('should load selected movie at start', function() {
	  		var movie = { id: 'some id' }
		    moviesDefer.resolve(movie);

		    $rootScope.$digest();
		    expect (calledMovieId).toEqual(movieId);
			expect (ctrl.movie).toEqual(movie);
		});


	});
});