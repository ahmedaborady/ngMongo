'use strict';

/**
 * @ngdoc function
 * @name iconApp02App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the iconApp02App
 */
angular.module('iconApp02App')
  .controller('NavCtrl', ['$scope','$location',function ($scope, $location) {
  $scope.isActive = function(path){
  return path === $location.path();

  };
  }]);
