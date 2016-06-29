angular.module('app')
.config(function ($routeProvider) {
	$routeProvider
		.when('/', { controller: 'PostsCtrl', templateUrl: 'posts.html' })
		.when('register', {controller: 'RegisterCtrl', templateUrl: 'register.htlm'})
		.when('login', {controller: 'LoginCtrl', templateUrl: 'login.html'})
})

