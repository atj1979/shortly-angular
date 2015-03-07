angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function () {
    $http.post('/api/links', { url:link.url }).
      success(function(data, status, headers, config) {
        console.log(data);
      }).
      error(function(data, status, headers, config) {
        console.error("Failed POST links request");
      });
    }



  // something($scope.link)
  //   Auth.signin($scope.user)
  //     .then(function (token) {
  //       $window.localStorage.setItem('com.shortly', token);
  //       $location.path('/links');
  //     })
  //   .catch(function (error) {
  //     console.error(error);
  //   });
  // };
});


// ShortenController should have a link property on t
// ShortenController should have a addLink method on the $scope
// ShortenController should be able to create new links with addLink()
