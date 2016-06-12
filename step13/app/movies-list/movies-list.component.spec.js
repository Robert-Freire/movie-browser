describe('MoviesList', function() {

  beforeEach(module('moviesBrowserApp'));

  describe ('MoviesListController', function (){
	  it('should create a moviliesList with three elements', inject(function($componentController) {
	    var ctrl = $componentController('moviesList', {});

	    expect(ctrl.movies.length).toBe(3);
	  }));
	});

});