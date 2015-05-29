
angular.module('hackstack demo app').controller('wrap',
function ($scope, $http) {
  var self = this;
  $scope.loadingMessage = 'Loading...';
  wrappedAPI.getAll().then(function(result) {
    $scope.cards = result.data;
    $scope.loadingMessage = null;
  }, function(err) {
    console.log(err);
  });
});
