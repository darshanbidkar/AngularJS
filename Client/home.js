var home = angular.module("homeApp", []);
home.controller("homeController", function($scope) {
    $scope.authenticate = function() {
        var client = new Dropbox.Client({key: "hw8rgsgolaui1qc"});
    }
});