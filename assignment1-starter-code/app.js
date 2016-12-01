(function () {

  'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

	function LunchCheckController ($scope) {
  $scope.listOfDishes =['soup','fish','salat'];
  $scope.name="Tamas";
  $scope.inputList;
  $scope.splittedList;
  $scope.splitInput = function(inputList){
  	splittedList=inputList.split(',');
  	//console.log(splittedList)

  }


}



})();
