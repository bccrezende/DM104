;(function(ng) {
  "use strict";

  ng.module("frontend")
    .config([
      "$locationProvider",
      function($locationProvider) {
        
        $locationProvider
          .html5Mode(true)
          .hashPrefix('*');
        
      }
    ]);
}(window.angular));
