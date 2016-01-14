'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('udxApp', [
  'ngRoute',
  'udxApp.chartView',
  'udxApp.homeView',
  'udxApp.contactUsView'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);

//simple controller for manipulating navbar links
app.controller('headerController', function($scope, $location){
   $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
})


