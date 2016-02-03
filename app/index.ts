import 'angular';

import './dataServices/dataservices.module';
import './movies/movies.module';
import './core/core.module';
import './app.module';

import 'bootstrap/dist/css/bootstrap.css';
import '../css/app.css';

angular.element(document).ready(() => {
	angular.bootstrap(document, ['app'], {
		strictDi: true
	});
});