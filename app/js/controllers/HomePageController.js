'use strict';

angular
.module('myApp')
.controller('HomePageController', ['$scope', function ($scope) {
  $scope.name = 'Sasha';
  $scope.setName = function (name) {
    $scope.name = name;
  }
}]);