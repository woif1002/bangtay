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
    // 点击登录页面
    $scope.fn=function(){
    	$http({
    		url:'http://www.bugcenter.com.cn:1511/users/login',
    		method:'post',
    		data:$scope.upuser
    	}).success(function(e){
    		var day=new Date();
    		day.setDate(day.getDate()+7)
    		document.cookie="login=1;expires="+day.toGMTString();
    		$rootScope.user={}
            $rootScope.user.username=$scope.upuser.username
            $rootScope.user.uid= e.uid
            $state.go('list')
    	})
    }
  }]);
