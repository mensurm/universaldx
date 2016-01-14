'use strict';

angular.module('udxApp.chartView', ['ngRoute'])

//configure routing for view
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/chart', {
    templateUrl: '/static/js/app/views/chart/chart.html',
    controller: 'chartController'
  });
}]);

app.factory('clinicalDataService', function($http) {
  return {
    async: function() {
      return $http.get('/clinical_data');
      }
  };
});

app.controller('chartController', function(clinicalDataService, $scope) {
    clinicalDataService.async().then(function(response) {
    $scope.data = response.data


    })

});