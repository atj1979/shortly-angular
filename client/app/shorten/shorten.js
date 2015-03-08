angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, Shorten) {
  $scope.link = {};

  $scope.addLink = function () {
    Shorten.addLink($scope.link)
      .then(function(data, status, headers, config) {
        console.log("THIS IS THE LINK URL", $scope.link.url);
        console.log($scope.data);
        //($scope.link.url);
        $scope.link.url ='';
      })
      .catch(function (error){
        console.error(error);
      });
    };
});
