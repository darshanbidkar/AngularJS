 var home = angular.module("homeApp", []);
            home.controller("homeController",
            function($scope) {
              $scope.authenticate = function() {
                $scope.message = 'done';
              }
            });