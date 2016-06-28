



var app = angular.module('app',[])

app.controller('PostsCtrl', function ($scope, $http) {
	$http.get('http://localhost:8888/api/posts')
	.success(function (posts) {
			$scope.posts = posts 
		})
	.error(function (err) {
		$scope.posts=[
		{
			username:"Error",
			body: "There was a bug :("
		}]
	})

	$scope.addPost = function () {
		if ($scope.postBody) {
			$http.post('/api/posts', {
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
