import 'angular';
import 'angular-mocks';
import 'jasmine';

import {IMoviesListController as IMoviesListController} from "./index";

describe('MoviesListController', () => {

  beforeEach(angular.mock.module('moviesBrowserApp'));

  it('should create a moviliesList with three elements', inject(($controller: any)  => {
    var ctrl:IMoviesListController = $controller('MoviesListController', {});

    expect(ctrl.movies.length).toBe(3);
  }));

});