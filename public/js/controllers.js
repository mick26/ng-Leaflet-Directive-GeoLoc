
'use strict';

/*================================================
Controllers Module
================================================ */
angular.module('myApp.controllers', [])

/*================================================
HomeCtrl - Controller
================================================ */
.controller('MapCtrl', function($scope, $http) {

   	//Declare variables - JS Objects
	$scope.center={};
	$scope.defaults={};

	//center coords - get via HTML5 location service
	$scope.center = {
		autoDiscover:true,
		zoom:8
	}

	$scope.defaults = {
		tileLayer: "http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png",
        maxZoom: 18,
        path: {
            weight: 10,
            color: '#800000',
            opacity: 1
        }
	};	
});
