// Main Angular app module

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/work', {
      templateUrl: '../views/work.html',
      controller: 'WorkController'
    }).
    when('/about', {
      templateUrl: '../views/about.html',
      controller: 'AboutController'
    }).
    when('/skills', {
      templateUrl: '../views/skills.html',
      controller: 'SkillsController'
    }).
    when('/contact', {
      templateUrl: '../views/contact.html',
      controller: 'ContactController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);
