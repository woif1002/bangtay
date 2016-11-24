'use strict';

/**
 * @ngdoc function
 * @name xm11App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the xm11App
 */
angular.module('xm11App')
  .controller('loginCtrl',['$rootScope','$scope','$state','$http', function($rootScope,$scope,$state,$http){
    $scope.fn=function(){
    	$http({
    		url:'http://www.bugcenter.com.cn:1511/users/login',
    		method:'post',
    		data:$scope.upuser
    	}).success(function(e){
    		$rootScope.user={}
            $rootScope.user.username=$scope.upuser.username
            $rootScope.user.uid= e.uid
            $state.go('list')
    	})
    }
  }]);
