angular.module('xm11App').controller("tuCtrl",['$scope','$state','$http','$rootScope',"$timeout",function($scope,$state,$http,$rootScope,$timeout){

// 返回上一步

 $scope.fh=function(){
      $state.go("list")
    }
//选项卡功能
var index=0;
var Onav=document.getElementById('nav');
var Oli=Onav.getElementsByTagName('li');
var Odiv=Onav.getElementsByTagName('div');
for(var i=0;i<Oli.length;i++){
	Oli[i].index=i;
	Oli[i].onclick=function(){
		for(var i=0;i<Odiv.length;i++){
			Oli[i].style.className='';
			Odiv[i].style.display='none';
		}
		Odiv[this.index].style.display='block';
		index=this.index
	}
};

//跳转页面
$scope.tulist=function(){
	$state.go("list")
}
//页面数据调取
  $scope.labels = ["重要","中等","一般"];
  $scope.data = [$rootScope.Imarr.length,$rootScope.Imarr1.length, $rootScope.Imarr2.length];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  // Simulate async data update
  $timeout(function () {
    $scope.data = [$rootScope.Imarr2.length,$rootScope.Imarr1.length,$rootScope.Imarr.length];
  }, 3000);
  console.log($rootScope.Imarr)
}]);
