app.controller('ContactController', function($scope, $http) {
  $scope.user = {};
  $scope.processing = false;
  $(document).ready(function() {
    $('textarea#message').characterCounter();
  });
  $scope.submit = function() {
    $scope.processing = true;
    $http({
      method: 'POST', 
      url: 'http://sanyamkhurana.herokuapp.com/api/send-contact-us-form/', 
      data: $scope.user, 
      }).success(function(data){
        if(data==null) {
          $scope.result = 'There was some problem recording your response. Please try again later or consider shooting a mail directly.'
        }
        else {
          $scope.result = data.Message;
        }
        $scope.processing = false;
      }).
      error(function(data){
        if(data==null) {
          $scope.result = 'There was some problem recording your response. Please try again later or consider shooting a mail directly.'
        }
        else {
          $scope.result = data.Message;
        }
        $scope.processing = false;
      });
    };
});