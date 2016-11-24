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
  	})
}]);
