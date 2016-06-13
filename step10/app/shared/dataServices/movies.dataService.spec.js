"use strict";
describe('MoviesDataService', function() {

  	beforeEach(module('moviesBrowserApp'));

  	var moviesdataservice;
  	var $httpBackend;

	beforeEach(inject(function (_moviesdataservice_, _$httpBackend_) {
	    moviesdataservice = _moviesdataservice_;
	    $httpBackend = _$httpBackend_;
	}));

  it('should fetch the four movies of the list', function (done) {

    var movies = {
    	results:[{
	    	id:1
	    }, {
	    	id:2
	    }, { 
	    	id:3
	    }, {
	    	id:4
	    }]
	};


	$httpBackend.whenGET(new RegExp("discover\/movie\?"))
		.respond(200, movies);

	moviesdataservice.getList().then(function (result){
		expect(result.length).toBe(4);
	}).finally(done);

	$httpBackend.flush();

  });
});
