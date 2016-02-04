import { MoviesBrowserLayout  } from './moviesbrowser.layout.directive';

angular.module('app.layout', [])
	.directive('moviesBrowserLayout', MoviesBrowserLayout.Factory());
