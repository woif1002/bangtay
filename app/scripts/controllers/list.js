angular.module('xm11App').controller("listCtrl",['$scope','$state','$http','$rootScope',function($scope,$state,$http,$rootScope){
  
  $http({
    url:"http://www.bugcenter.com.cn:1511/users/"+$rootScope.user.uid,
    method:"get"
  }).success(function(e){
    if(e.charactor==3){
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