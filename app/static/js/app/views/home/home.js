'use strict';

angular.module('udxApp.homeView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '/static/js/app/views/home/home.html',
    controller: 'homeController'
  });
}])

.controller('homeController', function($scope) {

});