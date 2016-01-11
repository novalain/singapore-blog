
angular.module('blogApp', [])

.controller('blogCtrl', ['$scope', 'blogService', '$timeout', function($scope, bs, $timeout) {

	$scope.hasLoaded = false;

	/*$timeout(function(){

		$scope.hasLoaded = true;

	}, 2000);
	/*$scope.activeMonth = "alla";*/
	$scope.num_posts = 2;

    bs.getBlogPosts().then(function(res){
    	
    	$scope.hasLoaded = true;
		$scope.blogPosts = res.data;

	}, function(err){

		alert("Kunde inte ladda inlägg, försök uppdatera sidan.");
		$scope.hasLoaded = true;

	});

/*
	$scope.changeActiveMonth = function(inMonth){

		
		$('#monthList li a').removeClass('active');
		$scope.activeMonth = inMonth;
		$('#' + inMonth).addClass('active');

	}*/

	$scope.loadMore = function(){

		$scope.num_posts++;

	}

}]);

