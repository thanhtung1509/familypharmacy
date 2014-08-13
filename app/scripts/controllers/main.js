define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name familypharmacyApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the familypharmacyApp
   */
  angular.module('familypharmacyApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
