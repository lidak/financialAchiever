'use strict';

describe('CategoryController', function () {
  beforeEach(module('myApp'));

  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));


  
  it('should has createCategory method', function () {
    var $scope = {};

    $controller('CategoryController', {
      $scope: $scope
    });

    expect(typeof $scope.createCategory).toBe('function');
  });

});