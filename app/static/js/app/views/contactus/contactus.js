'use strict';

angular.module('udxApp.contactUsView', ['ngRoute'])

//configure routing for view
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: '/static/js/app/views/contactus/contactus.html',
    controller: 'contactUsController'
  });
}]);

app.controller('contactUsController', function($scope) {


});