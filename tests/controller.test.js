'use strict';

describe('firstController test', function () {
  beforeEach(module('myApp'));
  var $controller,
    $scope;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  beforeEach(function () {
    $scope = {};
  });

  it('should work', function () {
    $controller('firstController', {$scope: $scope});
    expect($scope.name).toBe('Sasha');
  });

  it('setName should change scope name', function () {
    $controller('firstController', {$scope: $scope});
    $scope.setName('Lekha');

    expect($scope.name).toBe('Lekha');
  });
})