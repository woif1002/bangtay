'use strict';

/**
 * @ngdoc overview
 * @name xm11App
 * @description
 * # xm11App
 *
 * Main module of the application.
 */
angular.module('xm11App', ["ui.router","textAngular","chart.js"]).config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.when('','/login')
	$stateProvider.state('login',{
		url:'/login',
		templateUrl:'views/login.html',
		controller:'loginCtrl'
	}).state('list',{
	    url:'/list',
	    templateUrl:"views/list.html",
	    controller:"listCtrl"
  	}).state('zj',{
	    url:'/zj',
	    templateUrl:"views/zj.html",
	    controller:"zjCtrl"
  	}).state('xq',{
	    url:'/xq/:id',
	    templateUrl:"views/xq.html",
	    controller:"xqCtrl"
  	}).state('tu',{
	    url:'/tu/:id',
	    templateUrl:"views/tu.html",
	    controller:"tuCtrl"
  	})
}]).filter("imp",function(){
	return function(e){
		if(e==0){
			return "重要"			
		}else if(e == 1){
			return "中等"
		}else if(e == 2){
			return "一般"
		}
	}
}) .config(['ChartJsProvider', function (ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
      chartColors: ['#FF5252', '#FF8A80'],
      responsive: false
    });
    // Configure all line charts
    ChartJsProvider.setOptions('line', {
      showLines: false
    });
  }]);
