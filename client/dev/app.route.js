;(function(ng) {
  "use strict";

  ng.module("frontend")
    .config([
      "$routeProvider",
      function($routeProvider) {
        $routeProvider
          .when("/", {
            templateUrl: "todo/templates/todo.html",
            controller: "TodoController",
            controllerAs: "todoCtrl"
          })
          .otherwise({
            redirectTo: "/"
          });
      }
    ]);
}(window.angular));
