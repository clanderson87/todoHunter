var app = angular.module('todoHunterApp', ['angular.filter', 'ngRoute'])

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

app.controller('MainController',
  ['',
    function()
      {

        var vm = this; //aliasing this

        vm.playerName = null; //a string that the user can fill in.

        vm.styles = []; //the class/id names that will apply to the animated divs

        vm.todos = ["grocery shopping", "workout", "taxes", "laundry", "meal prep", "go to the post office", "return a library book", "drink heavily", "go to ______'s birthday party", "refill prescription", "call mom", "so and so's funeral", "that tv show I've been putting off", "read something besides buzzfeed", "cancel comcast", "vote for "] //the todos

}])
