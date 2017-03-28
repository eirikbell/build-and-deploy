(function(){
  'use strict';

  angular.module('calcApp').controller('calcCtrl', CalcController);

  CalcController.$inject = [];

  function CalcController(){
    var vm = this;

    vm.result = '';
    vm.calculate = calculate;
    vm.oper = 'plus';

    function calculate(firstArg, secondArg, operator){
      if(operator === 'plus'){
        vm.result = firstArg + secondArg;
      } else if (operator === 'minus'){
        vm.result = firstArg - secondArg;
      } else if(operator === 'divide'){
        if (secondArg !== 0){
          var result = firstArg / secondArg;
          vm.result = result;
        } else {
          vm.result = 'Cannot divide by zero';
        }
      }
      else {
        vm.result = 'Operator not implemented';
      }
    }
  }
}());