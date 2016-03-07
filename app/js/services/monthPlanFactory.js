'use strict';

angular
  .module('myApp')
  .factory('monthPlanFactory', function ($q) {
    return {
      getDataForMonth: function (monthAndYear) {
        var defer = $q.defer();
        setTimeout(function () {
          defer.resolve({
            expences: [
            {
              name: 'bread',
              amount: 200.00,
              category: 'food'
            }, {
              name: 'fuel',
              amount: 1500,
              category: 'fuel'
            }
          ]});
        }, 2000);
        return defer.promise;
      }
    };
  });