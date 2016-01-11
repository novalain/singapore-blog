angular.module("blogApp")
	.service("blogService", ['$q', '$http', function($q,$http){

		var base_url = "scripts/data.json"

		function getBlogPosts(){
			return $http.get(base_url, {timeout: 5000});
		}

		return {
			getBlogPosts: getBlogPosts
		}

	}]);