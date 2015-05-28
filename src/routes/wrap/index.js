angular.module('hackstack demo app').config([ '$routeProvider',
function ($routeProvider) {

  $routeProvider.when('/wrap', {
    templateUrl: 'routes/wrap/wrap.html',
    controller: 'wrap',
    controllerAs: 'vm'
  });

}]);
