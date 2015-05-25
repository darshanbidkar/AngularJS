 var home = angular.module("homeApp", []);
            home.controller("homeController",
            function($scope, $location, $window) {
              $scope.authenticate = function() {
                $scope.message = 'done';
                var dropboxurl = "https://www.dropbox.com/1/oauth2/authorize";
                  var authUrl = dropboxurl+"?response_type=code&client_id=hw8rgsgolaui1qc";
                  $window.location.href=authUrl;
              }
            });