
angular.module('hackstack demo app').controller('wrap',
function ($scope, $http) {
  var self = this;

  function success(result) {
    $scope.loadingMessage = null;
    $scope.cards = result.data;
  }

  function error (err) {
    console.info(err);
    $scope.errorMessage = err.data;
    $scope.loadingMessage = null;
  }

  $scope.loadingMessage = 'Loading...';

  wrappedAPI.getAll().then(success, error);
});
