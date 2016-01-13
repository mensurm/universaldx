'use strict';

angular.module('udxApp.chartView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/chart', {
    templateUrl: '/static/js/app/views/chart/chart.html',
    controller: 'chartController'
  });
}])

.controller('chartController', function($scope) {
    $scope.driversList = [
      {
          Driver: {
              givenName: 'Sebastian',
              familyName: 'Vettel'
          },
          points: 322,
          nationality: "German",
          Constructors: [
              {name: "Red Bull"}
          ]
      },
      {
          Driver: {
          givenName: 'Fernando',
              familyName: 'Alonso'
          },
          points: 207,
          nationality: "Spanish",
          Constructors: [
              {name: "Ferrari"}
          ]
      }
    ];
});