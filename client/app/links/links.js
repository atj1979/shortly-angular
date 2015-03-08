angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  $scope.data = {};

  $scope.getLinks = function () {
    $http.get('/api/links').
      success(function(data, status, headers, config) {
        $scope.data.links = data;
      }).
      error(function(data, status, headers, config) {
        console.error("Failed GET links request");
      });
  };
  console.log("links view switch woot")
  $scope.getLinks();

});
