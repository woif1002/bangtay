'use strict';

/**
 * @ngdoc function
 * @name xm11App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the xm11App
 */
angular.module('xm11App')
  .controller('zjCtrl',['$rootScope','$scope','$state','$http', function($rootScope,$scope,$state,$http){
    $scope.ff=function(e){
    	alert(111)
            $state.go('zj')
    	}
  }]);
