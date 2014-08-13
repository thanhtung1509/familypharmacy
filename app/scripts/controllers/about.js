define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name familypharmacyApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the familypharmacyApp
   */
  angular.module('familypharmacyApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
