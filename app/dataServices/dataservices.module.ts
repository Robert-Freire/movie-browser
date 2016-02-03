import { MoviesDataService } from  './movies.dataservice';

angular.module('app.dataservices', ['app.core'])
    .service('moviesdataservice', MoviesDataService);
