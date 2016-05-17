const angular = require('angular');
var demoApp = angular.module('demoApp', []);

demoApp.controller('SlugController', ['$scope', function($scope) {
  $scope.greeting = 'Slug!';
}]);
demoApp.controller('RabbitController', ['$scope', function($scope) {
  $scope.greeting = 'Rabbit!';
}]);
