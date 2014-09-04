'use strict';

/**
 * @ngdoc function
 * @name yoangApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoangApp
 */
angular.module('yoangApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
