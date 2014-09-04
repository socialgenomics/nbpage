'use strict';

/**
 * @ngdoc function
 * @name yoangApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoangApp
 */
angular.module('yoangApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
