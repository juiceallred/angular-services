angular.module('angularApp').controller('MainCtrl', function($scope, dataService) {
  // $scope.test = "Hello, Avengers";
  $scope.avengersArr = dataService.getData();


});
