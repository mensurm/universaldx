'use strict';

angular.module('udxApp.chartView', ['ngRoute'])

//configure routing for view
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/chart', {
    templateUrl: '/static/js/app/views/chart/chart.html',
    controller: 'chartController'
  });
}]);

app.controller('chartController', function($scope) {
    $scope.driversList = {};

});