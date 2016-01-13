app.factory('companyInfoService', function($http) {
  return {
    async: function() {
      return $http.get('/get-data');
      }
  };
});