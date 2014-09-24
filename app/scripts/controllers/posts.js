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

        $scope.addComment = function(){
            if($scope.body === '') { return; }
            $scope.post.comments.push({
                body: $scope.body,
                author: 'user',
                upvotes: 0
            });
            $scope.body = '';
        };
    }]);