import './dataServices/dataservices.module';
import './movies/movies.module';
import './core/core.module';
import './layout/layout.module';

angular.module('app', [
	'app.dataservices',
	'app.movies',
	'app.core',
	'app.layout']);