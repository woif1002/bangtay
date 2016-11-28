angular.module('xm11App')
  .controller('xqCtrl',['$rootScope','$scope','$state','$http','$stateParams', function($rootScope,$scope,$state,$http,$stateParams){
  		if(document.cookie.split('login=')[1]!=1&&!document.cookie){
				$state.go('login')
				return;
			}
  	$scope.id=$stateParams
    	$http({
    		url:'http://www.bugcenter.com.cn:1511/item/'+$stateParams.id,
    		method:'get',		
    	}).success(function(e){   		
    		$scope.data=e
    		    if(e.importance == 0){
    			    $scope.im="im"
    			    $scope.imp="重要"
    		    }else if(e.importance == 1){
    		    	$scope.im="im2"
    			    $scope.imp="中等"  
    		    }else if(e.importance == 2){
    		    	$scope.im="im3"
    			    $scope.imp="一般" 			    
    		    };
    		    
    		    //错误频率
    		    if(e. frequency ==0){
    		    	$scope.fre ="偶尔"
    		    }else if(e. frequency ==1){
    		    	$scope.fre ="经常"
    		    };
    		    
    		    
    		    //错误状态
    		    if(e. status ==0){
    		    	$scope.sta ="已指派"
    		    }else if(e.status ==1){
    		    	$scope.sta ="已解决"
    		    }else if(e.status ==2){
    		    	$scope.sta ="已关闭"
    		    }
    		    
    		    
    		    //错误分类
    		    
    		    if(e.classify ==0){
    		    	$scope.cwfl ="ui"
    		    }else if(e.classify ==1){
    		    	$scope.cwfl ="前端"
    		    }else if(e.classify ==2){
    		    	$scope.cwfl ="后台"
    		    }
    	})   	
    $scope.list=function(){
    	$state.go("list")
    }
    $scope.xf=function(){
        $http({
    			url:'http://www.bugcenter.com.cn:1511/item/'+$stateParams.id,
    			method:'put',
    			data:{status:1}
	    	}).success(function(e){  
	    		$scope.sta ="已解决";
	    		$scope.data=e
	    	})
    }
    
   
    
  }]);