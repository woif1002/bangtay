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
    // 返回上一步
    $scope.fh=function(){
        $state.go("list")
    }
    $scope.fc=function(){
    	if(typeof $scope.classify == 'undefined'){
    		alert('错误分类不能为空')
    		return false
    	}else if(typeof $scope.to == 'undefined'){
            alert('指派给谁不能为空')
            return false
        }else if(typeof $scope.to == 'undefined'){
            alert('发给谁不能为空')
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
        $scope.ud={}
        $scope.time=new Date();
        $scope.year=$scope.time.getFullYear();   //获取年
        $scope.month=$scope.time.getMonth()+1;    //获取月
        $scope.data2=$scope.time.getDate();       //获取日
        $scope.hour=$scope.time.getHours();       //获取时
        $scope.minutes=$scope.time.getMinutes();  //获取分
        $scope.order_time=$scope.year+'-'+$scope.month+'-'+$scope.data2+' '+''+$scope.hour+':'+$scope.minutes;
    	$http({
    		url:'http://www.bugcenter.com.cn:1511/item/',
    		method:'post',
    		data:{classify:$scope.classify,frequency:$scope.frequency,importance:$scope.importance,status:'0',date:$scope.order_time,summary:$scope.summary,from:'csd',description:$scope.description,to:$scope.to	
    		}
    	}).success(function(e){
            alert('恭喜您  上传成功')
            $state.go('list')
    	})
    };
    var index=0;
    var ctt=document.getElementById('classif');
    var lac=ctt.getElementsByTagName('label');
    var tc=too.getElementsByTagName('div');
    for(var i=0;i<lac.length;i++){
    	lac[i].index=i;
    	lac[i].onclick=function(){
    		for(var i=0;i<tc.length;i++){
              tc[i].style.display="none"
            }
        too.style.display="block";
		tc[this.index].style.display='block';
		index=this.index;
    	}
    };
  }]);
