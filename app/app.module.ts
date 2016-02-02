/// <reference path="dataservices\dataservices.module.ts" />
/// <reference path="movies\movies.module.ts" />


// import angular = require('angular');

// import './dataServices/dataservices.module';
// import './movies/movies.module';


namespace app {

    angular.module('app', [
		'app.dataservices',
		'app.movies']);


}
angular.element(document).ready(() => {
	angular.bootstrap(document, ['app'], {
		strictDi: true
	});
});