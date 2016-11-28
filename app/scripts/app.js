'use strict';

/**
 * @ngdoc overview
 * @name xm11App
 * @description
 * # xm11App
 *
 * Main module of the application.
 */
angular.module('xm11App', ["ui.router"]).config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
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
});
