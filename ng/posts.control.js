angular.module('app')
.controller('PostsCtrl', function ($scope, PostsSvc) {
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
				body: $scope.postBody
			}).success(function (post) {
				$scope.posts.unshift(post)
				$scope.postBody = null
			})
			$scope.postBody = null;
		}
	}
})
