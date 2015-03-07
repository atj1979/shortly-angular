angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, Shorten) {
  $scope.link = {};

  $scope.addLink = function () {
    console.log('addlink in shorten.js');
    Shorten.addLink($scope.link)
      .then(function(data, status, headers, config) {
        console.log(data);
      })
      .catch(function (error){
        console.error(error);
      });
      // error(function(data, status, headers, config) {
      //   console.error("Failed POST links request");
      // });
    };




  // something($scope.link)
  //   Auth.signin($scope.user)
  //     .then(function (token) {
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
