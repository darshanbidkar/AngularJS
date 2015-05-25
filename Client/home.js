 var home = angular.module("homeApp", []);
            home.controller("homeController",
            function($scope, $location, $window) {
              $scope.authenticate = function() {
                $scope.message = 'done';
                var dropboxurl = "https://www.dropbox.com/1/oauth2/authorize";
                  $window.location.href=dropboxurl;
                $location.url($window.location.href);
                  $location.search({
                    'response_type': 'code', 
                   'client_id':'hw8rgsgolaui1qc'
                  });
              }
            });