'use strict';

/**
 * @ngdoc function
 * @name iconApp02App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the iconApp02App
 */
angular.module('iconApp02App')
  .controller('MainCtrl', ['$scope','Mongo',function ($scope,Mongo) {
  $scope.members = Mongo.query();
  }]);
