"use strict";

describe('MoviesSummary', function() {

 	var moviesDefer;
  	var ctrl;
  	var $rootScope;
  	var currentPage;

	beforeEach(module('moviesBrowserApp'));

  	beforeEach(inject(function($componentController, $q, _$rootScope_){
	  	moviesDefer = $q.defer();

	  	var moviesDataServiceMock = {
	  		get: function (id){
	  			return moviesDefer.promise;
	  		}
	  	}
	    ctrl = $componentController('moviesSummary', {
	    	moviesdataservice: moviesDataServiceMock
	    });
	    $rootScope = _$rootScope_
  	}));

	describe ('MoviesSummaryController', function (){

	  	it('should suscribe to onLoadMovie from the list at start', function() {
			var moviesList = {
				onLoadMovie: jasmine.createSpy('onLoadMovie')
			}
			ctrl.moviesList = moviesList;
			ctrl.$onInit();

			expect (moviesList.onLoadMovie).toHaveBeenCalled();
		});

		it('When load a movie should call dataService ', function() {
	   		var movie = {id: 12};

		    moviesDefer.resolve(movie);

		   	ctrl.loadMovie();

			$rootScope.$digest();
		    expect(ctrl.movie).toBe(movie);
	   	});
	});
});