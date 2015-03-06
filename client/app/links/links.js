angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  // WHEN CONTROLLER LOADS, CALL GETLINKS PROPERTY ($SCOPE.GETLINKS())
  $scope.signin = function () {
  Auth.signin($scope.user)
    .then(function (token) {
      $window.localStorage.setItem('com.shortly', token);
      $location.path('/links');
    })
    .catch(function (error) {
      console.error(error);
    });
  };
});
