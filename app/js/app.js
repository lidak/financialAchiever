'use strict';

angular
  .module('myApp', ['ui.router'])
  .config(function ($stateProvider) {
    $stateProvider.state('home', {
      url: '/',
      controller: 'HomePageController',
      templateUrl: '/views/homePage.html'
    });

    $stateProvider.state('category', {
      url: '/category',
      controller: 'CategoryController',
      templateUrl: '/views/category.html'
    });
  })
  .run(['$state', function ($state) {
      $state.go('home');
  }]);