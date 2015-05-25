 var home = angular.module("homeApp", []);
            home.controller("homeController",
            function($scope, $http) {
              $scope.authenticate = function() {
                $scope.message = 'done';
                var dropboxurl = "https://www.dropbox.com/1/oauth2/authorize";
                var headers = {headers: {'response_type': 'token', 'client_id':'hw8rgsgolaui1qc'}};
                $http.get(dropboxurl, headers).success(function(response) {
                    $scope.message='yes';
                });
              }
            });