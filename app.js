(function () {
  'use strict';

  angular.module('calculator', [])

  .controller('NameCalculatorController',function($scope){
    $scope.name = "";
    $scope.outputValue = 0;

    $scope.displayNumneric=function(){
      var totalValue = calculateName($scope.name);
      $scope.outputValue = totalValue;
    };
    
    function calculateName(string){
      var totalStringValue=0;
      for(var i=0;i<string.length;i++){
        totalStringValue+=string.charCodeAt(i);
      }
      return totalStringValue;
    }
  });
})();
