(function () {

  'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

  function LunchCheckController ($scope) {
    //$scope.listOfDishes =['soup','fish','salat'];
    $scope.inputList;
    $scope.splittedList;

  $scope.splittedList = function  (){ 
	splitString($scope.inputList,',');
	countSplittedList();
  }

    function splitString(inputList,separator){
  	console.log(inputList);
  	var splittedList = inputList.split(separator);
  	console.log(splittedList);
  	$scope.splittedList = splittedList;
    }

    function countSplittedList(){
    	var count = $scope.splittedList.length;
    	console.log(count);
    }

  }

})();
