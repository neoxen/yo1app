'use strict';

/**
 * @ngdoc function
 * @name yo1App.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the yo1App
 */
angular.module('yo1App')
    .controller('PostsCtrl', ['$scope', 'posts','$routeParams', function ($scope, posts,$routeParams) {
        $scope.post = posts.posts[$routeParams.id];
    }]);