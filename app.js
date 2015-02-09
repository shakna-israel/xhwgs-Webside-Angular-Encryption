// AngularJS
(function() {
  'use strict';
  
  // Define a module (name of our ng-app is demo)
  var app = angular.module('demo', []);

  //Create a service factory for the EncryptLocalStorage
  app.factory('encryptService', [function() {
    return EncryptedLocalStorage;
  }]);
 
  // Create the CryptController (that have dependencies to the $scope, $window (global window) and the EncryptService)
  app.controller('CryptController', ['$scope', 'encryptService','$window',
    function($scope, EncryptService, global) {
      
      // Initialization
      var els = new EncryptService('secret'),
          key = 'mykey';

      // Get the current text and encrypted text from localstorage (if any).
      $scope.decryptedText = els.get(key);
      $scope.encryptedText = global.localStorage.getItem(key);
      
      // Method that gets called from when the user types in the textbox.
      $scope.encrypt = function(e) { 
        var text = e.target.value;
        // Update local storage key
        els.set(key, text); 
        
        // Get the current text and encrypted text from localstorage (if any).
        $scope.decryptedText = els.get(key);
        $scope.encryptedText = global.localStorage.getItem(key);
      };
  }]);

}());
