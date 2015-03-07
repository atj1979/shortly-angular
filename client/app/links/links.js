angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  $scope.data = {};

  // WHEN CONTROLLER LOADS, CALL GETLINKS PROPERTY ($SCOPE.GETLINKS())
  // LinksController should have a getLinks method on the $scope
  $scope.getLinks = function () {
    // send a get request (to server) to get all the links

    // console.log("inside getLinks inside links");

    $http.get('/api/links').
      success(function(data, status, headers, config) {
        console.log("SUCCESSFUL AJAX CALL INSIDE /API/LINKS IN LINKS.JS");
        $scope.data.links = data;
        // $scope.data = data;
        // console.log($scope.data.links);
      }).
      error(function(data, status, headers, config) {
        console.error("Failed GET links request");
      });
      // console.log("WE ARE OUTSIDE OF THE AJAX CALL IN LINKS.JS");
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


    $scope.getLinks();



});
