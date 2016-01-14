'use strict';

angular.module('udxApp.contactUsView', ['ngRoute'])

//configure routing for view
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: '/static/js/app/views/contactus/contactus.html',
    controller: 'contactUsController'
  });
}]);

app.controller('contactUsController', function($scope, $http) {
  //init form fields
  $scope.firstname = "";
  $scope.lastname  = "";
  $scope.email = "";
  $scope.question = "";
  $scope.showAlert = false;
  $scope.message = "";

  $scope.submitData = function(){
    var data = { firstname: $scope.firstname,
                 lastname: $scope.lastname,
                  email: $scope.email,
                  question: $scope.question
    }

    $http.post("/contact_us", data).success(function(data, status) {
            //clear form
            $scope.firstname = "";
            $scope.lastname  = "";
            $scope.email = "";
            $scope.question = "";

            //display feedback message
            $scope.message = data['message'];
            $scope.showAlert = true;
        })
  }


});