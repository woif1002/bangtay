angular.module('xm11App').controller("listCtrl",['$scope','$state','$http','$rootScope',"$timeout",function($scope,$state,$http,$rootScope,$timeout)
{
	if(document.cookie.split('login=')[1]!=1&&!document.cookie){
		$state.go('login')
		return;
	}
  // 返回上一步
  $scope.fh=function(){
    $state.go("login")
  }
  // 跳转到增加页面
  $scope.ff=function(){
    $state.go('zj')
  }
  //分页
var num=0;
$http({
    url:'http://www.bugcenter.com.cn:1511/item',
    method:"GET",
    params:{"$skip":num,"$limit":6}
}).success(function(e){
    $scope.data=e 
});

$scope.next=function(){
    num+=6;
    $http({
      url:'http://www.bugcenter.com.cn:1511/item',
      method:"GET",
      params:{"$skip":num,"$limit":6}
    }).success(function(e){
      $scope.data=e
    })
};
$scope.shang=function(){
    num-=6;
    if(num<0){
      num=0;
    }
    $http({
      url:'http://www.bugcenter.com.cn:1511/item',
      method:"GET",
      params:{"$skip":num,"$limit":6}
    }).success(function(e){
      $scope.data=e
    })
};

// 详情开始
	$scope.ff=function(){
	    $state.go('zj')
	};
	
	$scope.last = 'zhexian'
	//点击跳转图标页
    $scope.Dinaji=function(){
   	 	if($scope.last=="zhexian"){
   	 		$scope.last = 'zhexian1'
   	 	}else{
   	 		$scope.last = 'zhexian'
   	 	}
    } ;
    $scope.tiaotu =function(){
    	$state.go('tu')
    };

  $http({
    url:"http://www.bugcenter.com.cn:1511/users/"+$rootScope.user.uid,
    method:"get"
  }).success(function(e){
  	if(e.charactor==0){
  		$scope.isshow=false;
  		$scope.cc='设计'
  	}else if(e.charactor==1){
      $scope.isshow=false;
      $scope.cc='前端'
    }else if(e.charactor==2){
      $scope.isshow=false;
      $scope.cc='后台'
    }else if(e.charactor==3){
      $scope.isshow=true;
      $scope.cc='测试'
        $http({
        url:"http://www.bugcenter.com.cn:1511/item/",
        method:"get"
          }).success(function(e){
            console.log(e)
            $scope.data=e       
          })
    }
    $http({
    url:"http://www.bugcenter.com.cn:1511/item",
    method:"get",
    params:{'to':$rootScope.user.username}
	  }).success(function(e){
	    $scope.data=e
	  })
  });
  //把重要性的一些东西存到数组里，便于tu页面使用
  $rootScope.Imarr = []
  $rootScope.Imarr1 = []
  $rootScope.Imarr2 = []
  $http({
    url:"http://www.bugcenter.com.cn:1511/item/",
    method:"get",
    params:{'to':$rootScope.user.username}
  }).success(function(e){
    console.log(e)     
    $scope.data=e 
    for(var i =0;i<e.length;i++){
    	if(e[i].importance==0){
    		 $rootScope.Imarr.push(e[i])
    	}
    	if(e[i].importance==1){
    		 $rootScope.Imarr1.push(e[i])
    	}
    	if(e[i].importance==2){
    		 $rootScope.Imarr2.push(e[i])
    	}
    }
  }) 
}])
