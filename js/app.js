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
  [
    function()
      {

        var vm = this; //aliasing this

        var delayTime = 30

        vm.playerName = null; //a string that the user can fill in.

        vm.styles = ["blue", "green", "red"]; //the class/id names that will apply to the animated divs

        vm.rNum = [];

        vm.todos = ["grocery shopping", "workout", "taxes", "laundry", "meal prep", "go to the post office", "return a library book", "drink heavily", "go to ______'s birthday party", "refill prescription", "call mom", "so and so's funeral", "that tv show I've been putting off", "read something besides buzzfeed", "cancel comcast", "vote for "] //the todos

        vm.powerUps = ["slow down", "kill all"]

        var getRandomNumString = function(){
          var x = Math.floor(Math.random() * 700);
          var str = (x + "px");
          console.log(str);
          vm.rNum.push(str);
          console.log(vm.rNum);
        };

        while(vm.rNum.length < delayTime){
          getRandomNumString();
        }

        //I need to run this function every delayTime seconds so new paths will be made.
        var rebuildRNum = function(){
          vm.rNum.forEach(function(number){
            //need a regex to remove "px" from each index, then a method to convert the string into an int.
            var x = Math.floor(Math.random() * 250);
            var newNum = (Math.floor(number + x - Math.sqrt(x)) + "px");
            vm.rNum.splice(0, number);
            vm.rNum.push(newNum)
          })
        }




}])
