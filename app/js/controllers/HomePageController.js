'use strict';

angular
.module('myApp')
.controller('HomePageController', ['$scope', 'monthPlanFactory', function ($scope, monthPlanFactory) {
  monthPlanFactory.getDataForMonth().then(
    function(data) {
      $scope.currentMonthePlan = data.expences;
    },
    function(err) {

    });
}]);