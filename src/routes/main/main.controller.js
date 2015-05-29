
angular.module('hackstack demo app').controller('main',
function ($scope, hackstack) {
  var self = this;

  function success(result) {
    $scope.loadingMessage = null;
    $scope.cards = result.data;
  }

  function error(err) {
    console.info(err);
    $scope.loadingMessage = null;
    $scope.errorMessage = err.data;
  }

  $scope.loadingMessage = 'Loading...';
  mockAPI.getAll().then(success, error)

});
