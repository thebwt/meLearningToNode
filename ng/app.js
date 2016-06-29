var app = angular.module('app',[])

app.controller('PostsCtrl', function ($scope, PostsSvc) {
	PostsSvc.fetch().success(function (posts) {
			$scope.posts = posts 
		})

	PostsSvc.fetch().error(function (err) {
		$scope.posts=[{
			username:"Error",
			body: "There was a bug :("
		}]
	})

	$scope.addPost = function () {
		if ($scope.postBody) {
			PostsSvc.create({
				username: 'thebwt',
				body: $scope.postBody
			}).success(function (post) {
				$scope.posts.unshift(post)
				$scope.postBody = null
			})
			$scope.postBody = null;
		}
	}
})

app.service('PostsSvc', function ($http) {
	this.fetch = function () {
		return $http.get('api/posts')
	}

	this.create = function (post) {
		return $http.post('/api/posts', post)
	}
})
