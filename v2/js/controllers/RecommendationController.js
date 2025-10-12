app.controller('RecommendationsController', function($scope) {
  var target = $(ele);
  $.getJSON("js/recommendations.json", function(data) {
    $scope.recommendations = data["recommendations_received"]["values"];
  });
  $('html,body').animate({
    scrollTop: target.offset().top
  }, 1000);
});
