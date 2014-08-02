angular.module('app', [
	'ngRoute',
	'app.company',
	'app-templates',
	'slugifier',
	'ngAnimate',
])
	.config(function($routeProvider, snapRemoteProvider, $locationProvider) {
		'use strict';
		$locationProvider.html5Mode(true);

		$routeProvider
			.when('/404', {
				templateUrl: '404.html'
			})
			.otherwise({
				redirectTo: '/404'
			});
	}).run(function($rootScope, snapRemote, matchmedia) {
		'use strict';

	});
