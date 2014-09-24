'use strict';

/**
 * @ngdoc overview
 * @name yo1App
 * @description
 * # yo1App
 *
 * Main module of the application.
 */
angular
  .module('yo1App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/learn', {
        templateUrl: 'views/learn.html',
        controller: 'LearnCtrl'
      })
      .when('/posts/:id', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

/**
 * @ngdoc service
 * @name yo1App.factory:posts
 * @description
 * # posts
 * service/factory of the yo1App
 */
angular.module('yo1App')
    .factory('posts', [function() {
        var o = {
            posts:[]
        };
        return o;
    }]);