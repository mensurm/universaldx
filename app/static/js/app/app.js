'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('udxApp', [
  'ngRoute',
  'udxApp.chartView',
  'udxApp.homeView'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);


