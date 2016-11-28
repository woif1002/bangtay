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
    $scope.fc=function(){
    	if(typeof $scope.classify == 'undefined'){
    		alert('错误分类不能为空')
    		return false
    	}else if(typeof $scope.frequency == 'undefined'){
    		alert('发生频率不能为空')
    		return false
    	}else if(typeof $scope.importance == 'undefined'){
    		alert('重要性不能为空')
    		return false
    	}else if(typeof $scope.summary == 'undefined' ){
		    alert('简介内容不能为空')
		    return false
		}else if(typeof $scope.description == 'undefined'){
		    alert('描述内容不能为空')
		    return false
		}
    	$http({
    		url:'http://www.bugcenter.com.cn:1511/item/',
    		method:'post',
    		data:{classify:$scope.classify,frequency:$scope.frequency,importance:$scope.importance,summary:$scope.summary,description:$scope.description,to:'this.charactor'	
    		}
    	}).success(function(e){
 			
 			console.log(e)
            alert('恭喜您  上传成功')
    	})
    }
  }]);
