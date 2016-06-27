var app= angular.module("myapp",[]).controller("myctrl",function($scope,$http){

  		var url="suppliers.json";
  		$http.get(url).success(function(response){
  			$scope.suppliers=response;
  		});
  		
  	});