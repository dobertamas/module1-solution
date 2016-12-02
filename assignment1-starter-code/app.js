(function () {

  'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

  function LunchCheckController ($scope) {
    $scope.listOfDishes =['soup','fish','salat'];
    $scope.inputList;
    $scope.splittedList = [];

  $scope.splittedList = function  (){ 
	splitString($scope.inputList,',');
  }

    function splitString(inputList,separator){
  	console.log(inputList);
  	var splittedList = inputList.split(separator);
  	console.log(splittedList);
  	$scope.splittedList = splittedList;
    }

  }

})();
