describe('MoviesListController', function() {

  beforeEach(module('moviesBrowserApp'));

  it('should create a moviliesList with three elements', inject(function($controller) {
    var ctrl = $controller('MoviesListController', {});

    expect(ctrl.movies.length).toBe(3);
  }));

});