/* jshint strict:false, globalstrict:false */
/* global describe, it, beforeEach, inject, module */
describe('CompanyCtrl', function () {
	var CompanyCtrl,
		scope;

	beforeEach(module('ci'));

	beforeEach(

	CompanyCtrl = function() {
		return $controller('CompanyCtrl', {
			'$scope': $scope,
			'$rootScope': $rootScope
		});
	});

	it('should add new todos on add()', function () {
		companyCtrl();
		$scope.init();
		scope.activeMap.should.equal('showGlobal');
	});
});
