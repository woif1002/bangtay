angular.module('xm11App').controller("listCtrl",['$scope','$state','$http','$rootScope',function($scope,$state,$http,$rootScope){
//	alert(document.cookie)
	if(document.cookie.split('login=')[1]!=1&&!document.cookie){
		$state.go('login')
		return;
	}
  $scope.ff=function(){
    $state.go('zj')
  }
  $scope.fe=function(){
    alert(4444)
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
}
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
}

// 详情开始
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

  })
  
  $http({
    url:"http://www.bugcenter.com.cn:1511/item/",
    method:"get",
    params:{'to':$rootScope.user.username}
  }).success(function(e){
    console.log(e)
    $scope.data=e       
  }) 
}])




