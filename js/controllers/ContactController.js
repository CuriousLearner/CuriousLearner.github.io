app.controller('ContactController', function($scope, $http) {
  $scope.user = {};
  $(document).ready(function() {
    $('textarea#message').characterCounter();
  });
  $scope.submit = function() {
    console.log($scope.user);
    $http({
      method: 'POST', 
      url: 'http://localhost:5000/api/send-contact-us-form/', 
      data: $scope.user, 
      }).success(function(data){
        $scope.result = data.Message;
      }).
      error(function(data){
        console.log("Unable to submit form");
        $scope.result = data.Message;
      });
    };
});