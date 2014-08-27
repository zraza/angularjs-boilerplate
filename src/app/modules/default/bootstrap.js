angular.module('app.default', [])
	.config(function($routeProvider) {
		'use strict';
		$routeProvider
			.when('/404', {
				controller:'ErrorCtrl',
				templateUrl: '/app/modules/default/views/404.html',
				pageTitle:'Page not Found'
			}).when('/a', {
				controller:'ListCtrl',
				pageTitle:'a',
				templateUrl: '/app/modules/default/views/a.html'
			}).when('/b', {
				pageTitle:'b',
				templateUrl: '/app/modules/default/views/b.html'
			})
			.otherwise({
				redirectTo: '/404'
			});
	});