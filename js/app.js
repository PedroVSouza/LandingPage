var app = angular.module('tripulacao-master', []);

app.controller('formController', function($scope, $http) {
  $scope.master = {};

  $scope.submit = function(){
    console.log($scope.master);

    $http.post('http://localhost/tripulacao-api', function(response){
      console.log(response);
    });
  };
});
