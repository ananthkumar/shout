var app = angular.module('myApp', []);
  app.controller('planetController', function($scope, $http) {
    $http.get("http://localhost:3000/wines")
    .success(function(response) {$scope.names = response;});
  });