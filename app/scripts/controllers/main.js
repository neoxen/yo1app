'use strict';

/**
 * @ngdoc function
 * @name yo1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yo1App
 */
angular.module('yo1App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
