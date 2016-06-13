"use strict";

describe('MoviesList', function() {

  beforeEach(module('moviesBrowserApp'));

  describe ('MoviesListController', function (){
	  it('should create a moviliesList with three elements', inject(function($componentController, $q, $rootScope) {

	  	var moviesDefer = $q.defer();

	  	var moviesDataServiceMock = {
	  		getList: function (){
	  			return moviesDefer.promise;
	  		}
	  	}
	    var ctrl = $componentController('moviesList', {
	    	moviesdataservice: moviesDataServiceMock
	    });

	    moviesDefer.resolve([{
	    	id:1
	    }, {
	    	id:2
	    }, { 
	    	id:3
	    }]);

	    $rootScope.$digest();

	    expect(ctrl.movies.length).toBe(3);
	  }));
	});

});