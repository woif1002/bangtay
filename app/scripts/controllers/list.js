angular.module('xm11App').controller("listCtrl",['$scope','$state','$http','$rootScope',function($scope,$state,$http,$rootScope){
  $scope.ff=function(){
    $state.go('zj')
  }
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
      $scope.isshow=true
    }

  })
  $http({
    url:"http://www.bugcenter.com.cn:1511/item",
    method:"get",
    params:{'to':$rootScope.user.username}
  }).success(function(e){

    $scope.data=e
        
  })
}])