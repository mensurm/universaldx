'use strict';

angular.module('udxApp.homeView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '/static/js/app/views/home/home.html',
    controller: 'homeController'
  });
}]);

//register company info service that returns a promise
//inject http dependency
app.factory('companyInfoService', function($http) {
  return {
    async: function() {
      return $http.get('/company_info');
      }
  };
});

//register home controler (inject companyInfoService and scope dependencies)
app.controller('homeController', function(companyInfoService, $scope) {
    companyInfoService.async().then(function(response) {
    $scope.company = response.data;

})

});