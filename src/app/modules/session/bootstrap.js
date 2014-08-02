angular.module('app.session', [])
	.config(function($routeProvider) {
		'use strict';
		$routeProvider
			.when('/sessions', {
				controller: 'SessionListCtrl',
				templateUrl: '/app/modules/session/views/list.html'
			})
	});