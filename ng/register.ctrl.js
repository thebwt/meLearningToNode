angular.module('app')
.controller('RegCtrl', function ($scope, UserSvc) {
	$scope.register = function (username, password) {
		UserSvc.createUser(username,password)
	}
})

