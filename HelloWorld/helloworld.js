var hello = angular.module('HelloWorldApp', []);
hello.controller('HelloWorldController', function($scope) {
    $scope.onHelloClick = function()
	{
		alert($scope.getName);
	};
});
