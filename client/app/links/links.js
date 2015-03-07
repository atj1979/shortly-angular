angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  // WHEN CONTROLLER LOADS, CALL GETLINKS PROPERTY ($SCOPE.GETLINKS())
  // LinksController should have a getLinks method on the $scope
  $scope.getLinks = function () {
    // send a get request (to server) to get all the links
    $http.get('/api/links').
      success(function(data, status, headers, config) {
        console.log(data);
      }).
      error(function(data, status, headers, config) {
        console.error("Failed GET links request");
      });
    // when it comes back, display the links through the view
  // Auth.signin($scope.user)
    // .then(function (token) {
      // $window.localStorage.setItem('com.shortly', token);
    //   $location.path('/links');
    // })
    // .catch(function (error) {
    //   console.error(error);
  //  });
  };
});
