'use strict';

/**
 * @ngdoc function
 * @name yo1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yo1App
 */
angular.module('yo1App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
