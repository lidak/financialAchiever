'use strict';

angular
  .module('myApp')
  .controller('CategoryController', ['$scope', '$state', function ($scope, $state) {
    $scope.category = {
      name: undefined,
      isDefault: false
    };

    $scope.createCategory = function () {
      $state.go('home');
    };
  }]);