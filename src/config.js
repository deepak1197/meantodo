//writtten in es6 syntax
import angular from 'angular';
import uiRouter from 'angular-ui-router';
	
const app = angular.module('app',[uiRouter]);

app.config(($stateProvider,$urlRouterProvider,$locationProvider)=>{ //function syntax in es6
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('todos',{
			url:'/',
			template:require('todos/todos.html')
		})
		.state('about',{
			url:'/about',
			template:require('about/about.html')
		})
	$locationProvider.html5Mode(true); //to avoid # 
});
export default app;
