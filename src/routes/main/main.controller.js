
angular.module('hackstack demo app').controller('main',
function ($scope, hackstack) {
  var self = this;

  $scope.loadingMessage = 'Loading...';

  mockAPI.getAll().then(function(result) {
    $scope.loadingMessage = null;
    $scope.cards = result.data;
  });

});
