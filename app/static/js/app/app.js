'use strict';

// Declare app level module which depends on views, and components
angular.module('udxApp', [
  'ngRoute',
  'udxApp.chartView',
  'udxApp.homeView'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);


