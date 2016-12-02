(function () {

  'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

  function LunchCheckController ($scope) {
    $scope.inputList;
    $scope.splittedList;
    $scope.messageToDisplay = "";

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
    	if (count == 0) $scope.messageToDisplay = "Please enter data first";
    	if (count < 4) $scope.messageToDisplay = "Enjoy!";
    	if (count >= 4) $scope.messageToDisplay = "Too much!";
    }

  }

})();
