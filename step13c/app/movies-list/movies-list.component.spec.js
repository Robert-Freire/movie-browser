"use strict";

describe('MoviesList', function() {

	beforeEach(module('moviesBrowserApp'));

	 	var moviesDefer;
	  	var ctrl;
	  	var $rootScope;
	  	var currentPage;

	  	beforeEach(inject(function($componentController, $q, _$rootScope_){
		  	moviesDefer = $q.defer();

		  	var moviesDataServiceMock = {
		  		getList: function (pageToLoad){
		  			currentPage = pageToLoad;
		  			return moviesDefer.promise;
		  		}
		  	}
		    ctrl = $componentController('moviesList', {
		    	moviesdataservice: moviesDataServiceMock
		    });
		    $rootScope = _$rootScope_
	  	})
	);

	describe ('MoviesListController', function (){
	  	it('should create a movieList with three elements', function() {

		    moviesDefer.resolve([{
		    	id:1
		    }, {
		    	id:2
		    }, { 
		    	id:3
		    }]);

		    $rootScope.$digest();

		    expect(ctrl.movies.length).toBe(3);
	  	});

	  	it('should call load movies with page 1 at start', function() {

		    moviesDefer.resolve([]);

		    $rootScope.$digest();

		    expect(currentPage).toBe(1);
	  	});

	  	it('should call load movies with page 2 when calls nextPage', function() {

		    moviesDefer.resolve([]);

		    $rootScope.$digest();
		    ctrl.nextPage();

		    expect(currentPage).toBe(2);
	  	});

	  	it('should call load movies with page 0 when calls previousPage', function() {

		    moviesDefer.resolve([]);

		    $rootScope.$digest();
		    ctrl.previousPage();

		    expect(currentPage).toBe(0);
	  	});
	});
});