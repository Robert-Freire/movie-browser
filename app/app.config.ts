routes.$inject = ['$routeProvider'];

export default function routes ($routeProvider: angular.route.IRouteProvider) {
  $routeProvider.
    when('/movies', {
      template: '<movies-list></movies-list>'
    }).
    when('/movies/:movieId', {
      template: '<movie-detail></movie-detail>'
    }).
    otherwise('/movies');
};