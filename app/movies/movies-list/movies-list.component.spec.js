"use strict";

describe('MoviesList', function() {

 	var moviesDefer;
  	var ctrl;
  	var $rootScope;
  	var currentPage;

	beforeEach(module('moviesBrowserApp'));

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
  	}));

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

	  	it('When the loadMovie is called then the suscriber to the onLoadMovie are notified ', function () {
			var movieSuscriber = jasmine.createSpy('movieSuscriber');

			ctrl.onLoadMovie(movieSuscriber);
			var idMovie = 'any movie';

			ctrl.loadMovie (idMovie);

			expect(movieSuscriber).toHaveBeenCalledWith(idMovie);
	  	});

	  	it('When a nextPage is loaded then the suscribers to the onLoadMovie are notified ', function () {
			var movieSuscriber = jasmine.createSpy('movieSuscriber');
			var idMovie = 'any movie';

		    moviesDefer.resolve([{id:idMovie}]);

		    $rootScope.$digest();
			ctrl.onLoadMovie(movieSuscriber);
			ctrl.nextPage();
			$rootScope.$digest();

			expect(movieSuscriber).toHaveBeenCalledWith(idMovie);

	  	});

	    it('When a nextPage is loaded whitout data then the suscribers to the onLoadMovie arent notified ', function () {
			var movieSuscriber = jasmine.createSpy('movieSuscriber');
			var idMovie = 'any movie';

		    moviesDefer.resolve([]);

		    $rootScope.$digest();
			ctrl.onLoadMovie(movieSuscriber);
			ctrl.nextPage();
			$rootScope.$digest();

			expect(movieSuscriber).not.toHaveBeenCalled();

	  	});

	  	it('When a previousPage is loaded then the suscribers to the onLoadMovie are notified ', function () {
			var movieSuscriber = jasmine.createSpy('movieSuscriber');
			var idMovie = 'any movie';

		    moviesDefer.resolve([{id:idMovie}]);

		    $rootScope.$digest();
			ctrl.onLoadMovie(movieSuscriber);
			ctrl.previousPage();
			$rootScope.$digest();

			expect(movieSuscriber).toHaveBeenCalledWith(idMovie);

	  	});

	    it('When a previousPage is loaded whitout data then the suscribers to the onLoadMovie arent notified ', function () {
			var movieSuscriber = jasmine.createSpy('movieSuscriber');
			var idMovie = 'any movie';

		    moviesDefer.resolve([]);

		    $rootScope.$digest();
			ctrl.onLoadMovie(movieSuscriber);
			ctrl.previousPage();
			$rootScope.$digest();

			expect(movieSuscriber).not.toHaveBeenCalled();

	  	});

	});
});