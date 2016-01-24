var moviesBrowserApp = angular.module('moviesBrowserApp', []);

moviesBrowserApp.controller('MoviesController', function ($scope) {
  $scope.movies = [
      {
      "overview": "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
      "title": "Star Wars: The Force Awakens",
    },
    {
      "overview": "A cryptic message from Bond’s past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.",
      "title": "Spectre",
    }
  ];
});