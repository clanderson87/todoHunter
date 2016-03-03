var app = angular.module('todoHunterApp', ['angular.filter', 'ngRoute', 'dm.style'])

//Setting Up routes
app.config(['$routeProvider', function($routeProvider){

  //main route
  $routeProvider
    .when('/', {
      templateUrl: 'partials/main.html',
      controller: 'MainController as mainCtrl'
    })
    .otherwise({ redirectTo: '/' });

}]);

/* the following directive thanks to deanmcphearson -- https://github.com/deanmcphearson/angular-inline-style */

angular.module('dm.style', [])
  .directive('style', ['$compile', function($compile) {
    return {
      restrict: 'E',
      link: function postLink(scope, element) {
        if (element.html()) {
          var template = $compile('<style ng-bind-template="' + element.html() + '"></style>');
          element.replaceWith(template(scope));
        }
      }
    };
  }]);

//thanks dean!

app.controller('MainController',
  ['$interval', '$timeout',
    function($interval, $timeout)
      {

        var vm = this; //aliasing this

        var delayTime = 30

        vm.playerName = null; //a string that the user can fill in.

        vm.styles = ["blue", "green", "red"]; //the class/id names that will apply to the animated divs

        vm.rNum = [];

        vm.todos = ["grocery shopping", "workout", "taxes", "laundry", "meal prep", "go to the post office", "return a library book", "drink heavily", "go to ______'s birthday party", "refill prescription", "call mom", "so and so's funeral", "that tv show I've been putting off", "read something besides buzzfeed", "cancel comcast", "vote for "] //the todos

        vm.powerUps = ["slow down", "kill all"]

        vm.delayTime = Math.floor(Math.random() * 15)
        vm.delayTimes = vm.delayTime + "s";

        var getRandomNumString = function(){
          while(vm.rNum.length < 25){
            var x = Math.floor(Math.random() * 700);
            vm.rNum.push(x);
            console.log(vm.rNum);
          }
        }();


        //I need to run this function every delayTime seconds so new paths will be made.
        var rebuildRNum = function(){
          for (var i = vm.rNum.length - 1; i >= 0; i--) {
            var number = vm.rNum[i];
            // var voidNum = parseInt(number);
            var x = Math.floor(Math.random() * 500);
            var newNum = (Math.floor(number + x));
            vm.rNum.splice(i, 1, newNum);
          }
          vm.delayTime = Math.floor(Math.random() * 15);
          vm.delayTimeMs = (vm.delayTime * 1000)
          console.log(vm.delayTimeMs);
          vm.delayTimes = vm.delayTime + "s"
          delayThis()
        }

        var delayThis = function(){
          $interval(rebuildRNum, vm.delayTimeMs)
        }




}])
